import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import {
  ListResponse,
  ListItemResponse,
  CreateListItemResponse,
  DeleteListItemResponse,
} from './entities/list.entity';
@Controller('list')
@ApiTags('文章列表')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post()
  @ApiOkResponse({ type: CreateListItemResponse })
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto);
  }

  @Get()
  @ApiOkResponse({ type: ListResponse })
  findAll() {
    return this.listService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ListItemResponse })
  findOne(@Param('id') id: string) {
    return this.listService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listService.update(+id, updateListDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DeleteListItemResponse })
  remove(@Param('id') id: string) {
    return this.listService.remove(id);
  }
}
