import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './';
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
