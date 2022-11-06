import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

import octaveTaskbook from '../../data/octave/taskbook';

const content = {
  octave: {
    taskbook: octaveTaskbook,
  },
};

@Injectable()
export class ContentService {
  getContent(lang: string, course: string, type: string) {
    return content[course][type][lang];
  }

  async getChapterContent(
    lang: string,
    course: string,
    type: string,
    chapterId: string,
  ) {
    const description = await fs.readFile(
      `./data/${course}/${type}/locale/${lang}/${chapterId}.md`,
      'utf-8',
    );

    return {
      description,
    };
  }

  async getTaskContent(
    lang: string,
    course: string,
    type: string,
    chapterId: string,
    taskId: string,
  ) {
    const description = await fs.readFile(
      `./data/${course}/${type}/locale/${lang}/${chapterId}/${taskId}.md`,
      'utf-8',
    );

    return {
      description,
    };
  }
}
