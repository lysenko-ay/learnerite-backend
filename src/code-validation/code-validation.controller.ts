import { Controller, Param, Post } from '@nestjs/common';
import { MessageBody } from '@nestjs/websockets';
import { execute } from './engine/octave';

const engines = {
  octave: { execute },
};

@Controller('code-validation')
export class CodeValidationController {
  @Post()
  async ExecuteCode(
    @Param('course') course: string,
    @MessageBody('code') code: string,
  ) {
    const stdout = await engines[course].execute(code);
    return stdout;
  }

  @Post(':course/:type/:chapterId/:taskId')
  async TestCode(
    @Param('course') course: string,
    @Param('type') type: string,
    @Param('chapterId') chapterId: string,
    @Param('taskId') taskId: string,
    @MessageBody('code') code: string,
  ) {
    const stdout = await engines[course].test(
      `${course}/${type}/tests/${chapterId}/${taskId}`,
      code,
    );
    return stdout;
  }
}
