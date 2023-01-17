import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from './';
export class UpdateArticleDto extends CreateArticleDto {
  @ApiProperty({ required: true, nullable: true })
  article_content: string | null;
  @ApiProperty({ required: true, nullable: true })
  article_description: string | null;
  @ApiProperty({ required: true, nullable: true })
  article_title: string | null;
  @ApiProperty({ required: true, nullable: true })
  author_id: string | null;
  @ApiProperty({ required: true, nullable: true })
  cate_name: Array<string> | null;
}
