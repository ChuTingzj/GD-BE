import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/prisma/prisma.service';
import { ArticleService } from './article.service';
import { ArticleList } from '@/utils';
import type { ArticleResponse } from '@/entities';
describe('ArticleService', () => {
  let service: ArticleService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService, PrismaService],
    }).compile();
    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findOne', () => {
    it('should return an object of ArticleResponse', async () => {
      const result: ArticleResponse = {
        data: Object.assign(
          { id: '05109fb4-6a37-483c-b62a-44fcaa7cf385' },
          ArticleList[4],
        ) as any,
        success: true,
        message: '操作成功',
      };
      jest.spyOn(service, 'findOne').mockImplementation(() => result as any);
      expect(
        await service.findOne('05109fb4-6a37-483c-b62a-44fcaa7cf385'),
      ).toBe(result);
    });
  });
});
