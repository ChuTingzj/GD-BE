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
import { CreateArticleDto, UpdateArticleDto } from '@/dto';
import { ArticleResponse, DeleteResponse, CreateResponse } from '@/entities';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiOkResponse({ type: CreateResponse, description: '发布文章' })
  create(@Body('article') article: CreateArticleDto) {
    return this.articleService.create(article);
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleResponse, description: '文章详情' })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CreateResponse, description: '修改文章' })
  update(@Param('id') id: string, @Body('article') article: UpdateArticleDto) {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteResponse, description: '删除文章' })
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
