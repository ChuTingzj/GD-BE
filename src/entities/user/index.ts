import { ApiProperty } from '@nestjs/swagger';
import { User, Authorization } from '@/generated/client';
import { NormalEntity } from '../';
export class UserEntity implements User {
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  isExist: boolean;
  @ApiProperty()
  user_name: string;
  @ApiProperty({ nullable: true })
  account: string | null;
  @ApiProperty({ nullable: true })
  authToken: string | null;
  @ApiProperty()
  authorized: boolean;
  @ApiProperty({ nullable: true, enum: Authorization })
  authorizedBy: Authorization | null;
  @ApiProperty({ nullable: true })
  password: string | null;
}
export class UserResponse implements NormalEntity<UserEntity | null> {
  @ApiProperty({ nullable: true, type: UserEntity })
  data: UserEntity | null;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}
