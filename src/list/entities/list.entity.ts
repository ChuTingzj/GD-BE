import { ApiProperty } from '@nestjs/swagger';
import { Article, User, Category } from '@/generated/client';
import { NormalEntity } from '@/entities';
export class ArticleEntity implements Article {
  @ApiProperty({ nullable: true })
  article_bigCover: string | null;
  @ApiProperty()
  article_content: string;
  @ApiProperty({ nullable: true })
  article_cover: string | null;
  @ApiProperty()
  article_description: string;
  @ApiProperty()
  article_title: string;
  @ApiProperty()
  author_id: string;
  @ApiProperty()
  browse_times: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  id: string;
  @ApiProperty()
  isExist: boolean;
  @ApiProperty()
  category_list: Array<Category>;
  @ApiProperty()
  comment_list: Array<Comment>;
  @ApiProperty()
  author: User;
  @ApiProperty()
  like_times: number;
  @ApiProperty()
  updatedAt: Date;
}
export class ListResponse implements NormalEntity<Array<ArticleEntity>> {
  @ApiProperty()
  data: Array<ArticleEntity>;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}

export class ListItemResponse implements NormalEntity<ArticleEntity> {
  @ApiProperty()
  data: ArticleEntity;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}

export class CreateListItemResponse {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  message: string;
}

export class DeleteListItemResponse extends CreateListItemResponse {}
