import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty } from 'class-validator';
export class CreateArticleDto {
  @ApiProperty({ nullable: true, required: true })
  article_bigCover?: string | null;
  @ApiProperty({ nullable: true, required: true })
  article_cover?: string | null;
  @ApiProperty({ required: true })
  article_content: string;
  @ApiProperty({ required: true })
  article_description: string;
  @ApiProperty({ required: true })
  article_title: string;
  @ApiProperty({ required: true })
  author_id: string;
  @ApiProperty({ required: true, isArray: true })
  cate_name: Array<string>;
}
