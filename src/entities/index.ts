import { ApiProperty } from '@nestjs/swagger';

export * from './article';
export abstract class NormalEntity<T> {
  success: boolean;
  message: string;
  data: T;
}
export class CreateResponse {
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  message: string;
}
export class DeleteResponse extends CreateResponse {}
