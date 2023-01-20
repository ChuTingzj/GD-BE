import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@/generated/client';
export class CommentEntity implements Comment {
  @ApiProperty()
  article_id: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  dislike_times: number;
  @ApiProperty()
  id: string;
  @ApiProperty()
  like_times: number;
  @ApiProperty()
  parent_id: string;
  @ApiProperty()
  user_id: string;
}
