import { ApiProperty } from '@nestjs/swagger';
export class ReadListDto {
  @ApiProperty({ nullable: true })
  cate_name?: string | null;
  @ApiProperty({ nullable: true })
  latest?: boolean | null;
  @ApiProperty({ nullable: true })
  hottest?: boolean | null;
}
