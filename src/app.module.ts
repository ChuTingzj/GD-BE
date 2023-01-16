import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
@Module({
  imports: [ListModule, PrismaModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
