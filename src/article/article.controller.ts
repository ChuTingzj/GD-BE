import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from '@/dto';
import { ArticleResponse, DeleteResponse } from '@/entities';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create();
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleResponse })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.articleService.update(+id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteResponse })
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
