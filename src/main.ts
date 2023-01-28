import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UserEntity, CommentEntity, CategoryEntity } from '@/entities';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('毕设-接口文档')
    .setExternalDoc('导出JSON格式', 'http://localhost:3000/api-docs-json')
    .setVersion('1')
    .build();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [UserEntity, CommentEntity, CategoryEntity],
  });
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
