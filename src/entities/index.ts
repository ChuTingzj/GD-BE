import { ApiProperty } from '@nestjs/swagger';

export * from './article';
export * from './category';
export * from './comment';
export * from './user';
export * from './carousel';
export * from './authorize';
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
export class UpdateResponse extends CreateResponse {}
export class ReadResponse extends CreateResponse {}
