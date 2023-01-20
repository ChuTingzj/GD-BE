import { ApiProperty } from '@nestjs/swagger';
import { User } from '@/generated/client';
export class UserEntity implements User {
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  isExist: boolean;
  @ApiProperty()
  user_name: string;
}
