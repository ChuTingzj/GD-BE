import { ApiProperty } from '@nestjs/swagger';
export class ReadListDto {
  @ApiProperty({ required: true })
  end_id?: string | null;
  @ApiProperty({ nullable: true })
  cate_name?: string | null;
  @ApiProperty({ nullable: true })
  latest?: boolean | null;
  @ApiProperty({ nullable: true })
  hottest?: boolean | null;
}
