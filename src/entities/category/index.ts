import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@/generated/client';
import { NormalEntity } from '../';
export class CategoryEntity implements Category {
  @ApiProperty()
  background: string;
  @ApiProperty()
  cate_name: string;
  @ApiProperty()
  cate_pic: string;
  @ApiProperty()
  id: string;
}
export class CategoryResponse implements NormalEntity<Array<CategoryEntity>> {
  @ApiProperty({ type: [CategoryEntity] })
  data: Array<CategoryEntity>;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}
