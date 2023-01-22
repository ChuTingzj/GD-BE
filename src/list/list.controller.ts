import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { ListService } from './list.service';
import { ListResponse } from '@/entities';
import { ReadListDto } from '@/dto';
@Controller('list')
@ApiTags('文章列表')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  @ApiOperation({ summary: '文章列表' })
  @ApiBody({ type: ReadListDto })
  @ApiOkResponse({ type: ListResponse })
  findAll(@Body() req_body: ReadListDto) {
    return this.listService.findAll(req_body);
  }
  @Get('hot')
  @ApiOperation({ summary: '精彩文章列表' })
  @ApiOkResponse({ type: ListResponse })
  findTopArticle() {
    return this.listService.findTopArticle();
  }
}
