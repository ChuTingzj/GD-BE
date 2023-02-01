import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { CarouselModule } from './carousel/carousel.module';
import { AuthorizeModule } from './authorize/authorize.module';
@Module({
  imports: [
    ListModule,
    PrismaModule,
    ArticleModule,
    CategoryModule,
    CarouselModule,
    AuthorizeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
