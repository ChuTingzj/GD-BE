import { ApiProperty } from '@nestjs/swagger';
import { NormalEntity } from '../';
export class ByPasswordResponse implements NormalEntity<string> {
  @ApiProperty()
  data: string;
  @ApiProperty()
  message: string;
  @ApiProperty()
  success: boolean;
}
