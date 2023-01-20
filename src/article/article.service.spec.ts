import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/prisma/prisma.service';
import { ArticleService } from './article.service';
import { ArticleList } from '@/utils';
import type {
  ArticleResponse,
  CreateResponse,
  DeleteResponse,
} from '@/entities';
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
  describe('create', () => {
    it('should return an object of CreateResponse', async () => {
      const result: CreateResponse = { success: true, message: '操作成功' };
      expect(
        await service.create({
          article_title: 'test!!!',
          article_description: 'test',
          article_content: '666',
          author_id: '49dffcbe-e5f2-410c-ad9c-f441b24f8034',
          cate_name: ['算法'],
        }),
      ).toStrictEqual(result);
    });
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
      expect(
        await service.findOne('05109fb4-6a37-483c-b62a-44fcaa7cf385'),
      ).toBe(result);
    });
  });
  describe('update', () => {
    it('should return an object of CrateResponse', async () => {
      const result: CreateResponse = { success: true, message: '操作成功' };
      expect(
        await service.update('05109fb4-6a37-483c-b62a-44fcaa7cf385', {
          cate_name: ['算法'],
        }),
      ).toBe(result);
    });
  });
  describe('remove', () => {
    it('should return an object of DeleteResponse', async () => {
      const result: DeleteResponse = { success: true, message: '操作成功' };
      expect(
        await service.remove('05109fb4-6a37-483c-b62a-44fcaa7cf385'),
      ).toStrictEqual(result);
    });
  });
});
