import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@/generated/client';
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
