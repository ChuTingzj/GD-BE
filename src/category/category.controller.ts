import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryResponse } from '@/entities';
@Controller('category')
@ApiTags('分类')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOperation({ summary: '获取分类' })
  @ApiOkResponse({ type: CategoryResponse })
  findAll() {
    return this.categoryService.findAll();
  }
}
