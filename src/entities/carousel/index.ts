import { ApiProperty } from '@nestjs/swagger';
import type { Carousel } from '@/generated/client';
import { NormalEntity } from '../';
export class CarouselEntity implements Carousel {
  @ApiProperty()
  id: string;
  @ApiProperty()
  img_url: string;
}
export class CarouselResponse implements NormalEntity<Array<CarouselEntity>> {
  @ApiProperty({ type: [CarouselEntity] })
  data: Array<CarouselEntity>;
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  message: string;
}
