import { ApiOperation, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { CarouselResponse } from '@/entities';
import { CarouselService } from './carousel.service';

@Controller('carousel')
@ApiTags('轮播图')
export class CarouselController {
  constructor(private readonly carouselService: CarouselService) {}
  @Get()
  @ApiOperation({ summary: '获取轮播图' })
  @ApiOkResponse({ type: CarouselResponse })
  findAll() {
    return this.carouselService.findAll();
  }
}
