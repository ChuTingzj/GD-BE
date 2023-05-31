import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty } from 'class-validator';
export class AuthorizeDto {
  @ApiProperty({ type: String, required: true })
  code: string;
}
export class CreateUserOrLoginByPasswordDto {
  @ApiProperty({ required: true })
  account: string;
  @ApiProperty({ required: true })
  password: string;
}
