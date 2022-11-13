import * as Docker from 'dockerode';
import * as fs from 'fs/promises';
import * as moment from 'moment';
import * as tar from 'tar';
import { existsSync } from 'fs';

// magic value to differentiate user output from test
const OCC_MAGIC = 96; // char(96) = "`"

const docker = new Docker();

let jobId = 1;

const containerOptions = (code: string) => {
  return {
    Image: 'alextheregent/learnerite-core-octave:latest',
    Cmd: [
      'octave-cli',
      '--no-window-system',
      '--no-gui',
      '--silent',
      '--interactive',
      '--eval',
      code,
    ],
    Env: [`OCC_MAGIC=${OCC_MAGIC}`],
    NetworkDisabled: true,
    AttachStdin: false,
    AttachStdout: true,
    AttachStderr: true,
    OpenStdin: false,
    StdinOnce: false,
    Tty: true,
    Binds: [
      '/etc/timezone:/etc/timezone:ro',
      '/etc/localtime:/etc/localtime:ro',
    ],
  };
};

function textToFile(text: string): Promise<string> {
  return new Promise(async (resolve) => {
    const fileName =
      'job_' + moment().format('YYYY_MM_DD_HH_mm_ss') + '_' + jobId.toString();
    jobId += 1;

    await fs.writeFile(
      `./jobs/${fileName}.m`,
      `function ${fileName}()\n${text}\nend`,
    );

    tar
      .create({ file: `./jobs/${fileName}.tar`, cwd: './jobs/' }, [
        `${fileName}.m`,
      ])
      .then(() => {
        resolve(fileName);
      });
  });
}

function processContainer(container: any, timeout: number): Promise<any> {
  return new Promise((resolve, reject) => {
    let stdout: Buffer = Buffer.from('');

    container
      .attach({ stream: true, stdout: true, stderr: true })
      .then((stream: any) => {
        stream.on('data', (data: any) => {
          stdout += data;
        });

        container.start().then(() => {
          container.stop({ t: timeout }, (err: any) => {
            // if countainer is already stopped do not reject promise
            if (err && err.statusCode != 304) {
              reject(err);
            }
          });

          container.wait((err: any, data: any) => {
            container
              .remove()
              .then(() => resolve({ code: data.StatusCode, stdout }));
          });
        });
      });
  });
}

export function execute(code: string, timeout: number): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const fileName = await textToFile(code);
    docker.createContainer(
      containerOptions(fileName),
      async (err, container: any) => {
        if (err) {
          reject({ error: err });
          return;
        }

        container
          .putArchive(`jobs/${fileName}.tar`, { path: '/usr/src/app/' })
          .then(async () => {
            const result: any = await processContainer(container, timeout);
            resolve(result);
          });
      },
    );
  });
}

export async function test(
  testPath: string,
  usercode: string,
  timeout: number,
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    if (!existsSync(`./data/${testPath}.m`)) {
      return reject('test not found');
    }

    const content = await fs.readFile(`./data/${testPath}.m`, 'utf8');
    const code = content
      .replace('%{usercode}%', usercode)
      .replace(/%!s.+%!e/gms, '');

    try {
      const stdout = await execute(code, timeout);
      resolve(stdout);
    } catch (err) {
      reject(err);
    }
  });
}
