import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [ListModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
