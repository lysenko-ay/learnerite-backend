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

  @Get(':course/:type/:chapter')
  @Header('Access-Control-Allow-Origin', '*')
  async getChapter(
    @Param('course') course: string,
    @Param('type') type: string,
    @Param('chapter') chapter: string,
  ) {
    return await this.contentService.getChapterContent(
      'ru',
      course,
      type,
      chapter,
    );
  }

  @Get(':course/:type/:chapter/:task')
  @Header('Access-Control-Allow-Origin', '*')
  getTask(
    @Param('course') course: string,
    @Param('type') type: string,
    @Param('chapter') chapter: string,
    @Param('task') task: string,
  ) {
    return { course, type, chapter, task };
  }
}
