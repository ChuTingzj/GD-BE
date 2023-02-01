import { ApiProperty } from '@nestjs/swagger';
export class AuthorizeDto {
  @ApiProperty({ type: String, required: true })
  code: string;
}
