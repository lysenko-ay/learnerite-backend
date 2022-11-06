import { Controller, Get, Header, Param } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get(':course/:type')
  @Header('Access-Control-Allow-Origin', '*')
  getContent(@Param('course') course: string, @Param('type') type: string) {
    return this.contentService.getContent('ru', course, type);
  }

  @Get(':course/:type/:chapterId')
  @Header('Access-Control-Allow-Origin', '*')
  async getChapter(
    @Param('course') course: string,
    @Param('type') type: string,
    @Param('chapterId') chapterId: string,
  ) {
    return await this.contentService.getChapterContent(
      'ru',
      course,
      type,
      chapterId,
    );
  }

  @Get(':course/:type/:chapterId/:taskId')
  @Header('Access-Control-Allow-Origin', '*')
  async getTask(
    @Param('course') course: string,
    @Param('type') type: string,
    @Param('chapterId') chapterId: string,
    @Param('taskId') taskId: string,
  ) {
    return await this.contentService.getTaskContent(
      'ru',
      course,
      type,
      chapterId,
      taskId,
    );
  }
}
