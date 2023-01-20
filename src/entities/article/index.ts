import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@/generated/client';
import {
  NormalEntity,
  CategoryEntity,
  CommentEntity,
  UserEntity,
} from '@/entities';
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
  @ApiProperty({ type: [CategoryEntity] })
  category_list: Array<CategoryEntity>;
  @ApiProperty({ type: [CommentEntity] })
  comment_list: Array<CommentEntity>;
  @ApiProperty({ type: UserEntity })
  author: UserEntity;
  @ApiProperty()
  like_times: number;
  @ApiProperty()
  updatedAt: Date;
}
export class ListResponse implements NormalEntity<Array<ArticleEntity>> {
  @ApiProperty({ type: [ArticleEntity] })
  data: Array<ArticleEntity>;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}

export class ArticleResponse implements NormalEntity<ArticleEntity> {
  @ApiProperty()
  data: ArticleEntity;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}
