import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
import { ArticleList } from './mock';

export const createArticleMany = async (
  data: Prisma.ArticleCreateManyInput[],
) => {
  const res = await prisma.article.createMany({
    data,
  });
  return res;
};
export const createArticleMany_mock = async () =>
  await createArticleMany(ArticleList);
