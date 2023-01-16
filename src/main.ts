import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import history from 'connect-history-api-fallback';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('毕设-接口文档')
    .setDescription('毕设-BE')
    .setVersion('1')
    .build();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(history());
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
