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
import { ApiBody, ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @ApiOperation({ summary: '发布文章' })
  @ApiOkResponse({ type: CreateResponse })
  @ApiBody({ type: CreateArticleDto })
  create(@Body('article') article: CreateArticleDto) {
    return this.articleService.create(article);
  }

  @Get(':id')
  @ApiOperation({ summary: '文章详情' })
  @ApiOkResponse({ type: ArticleResponse })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改文章' })
  @ApiOkResponse({ type: CreateResponse })
  @ApiBody({ type: UpdateArticleDto })
  update(@Param('id') id: string, @Body('article') article: UpdateArticleDto) {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  @ApiOkResponse({ type: DeleteResponse })
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
