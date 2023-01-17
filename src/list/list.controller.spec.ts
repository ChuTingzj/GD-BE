import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/prisma/prisma.service';
import { ListController } from './list.controller';
import { ListService } from './list.service';

describe('ListController', () => {
  let controller: ListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [ListService, PrismaService],
    }).compile();

    controller = module.get<ListController>(ListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
