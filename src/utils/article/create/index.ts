import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
import { ArticleList } from './mock';

export const createArticleMany = async (
  data: Prisma.ArticleCreateManyArgs['data'],
) => {
  const res = await prisma.article.createMany({
    data,
  });
  return res;
};
export const createArticle = async (
  data:
    | Array<Prisma.ArticleCreateArgs['data']>
    | Prisma.ArticleCreateArgs['data'],
) => {
  if (Array.isArray(data)) {
    const resList = [];
    for (const item of data) {
      const res = await prisma.article.create({
        data: item,
      });
      resList.push(res.id);
    }
    return resList;
  } else {
    const res = await prisma.article.create({ data });
    return res;
  }
};

export const createArticle_mock = async () => await createArticle(ArticleList);
