import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ListService } from './list.service';
import { ListResponse } from '@/entities';
@Controller('list')
@ApiTags('文章列表')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  @ApiOkResponse({ type: ListResponse })
  findAll() {
    return this.listService.findAll();
  }
}
