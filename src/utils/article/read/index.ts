import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
export const getArticle = async () => {
  const res = await prisma.article.findMany({
    include: {
      category_list: true,
      author: true,
      comment_list: true,
    },
  });
  return res;
};
export const findArticle = async (
  where: Prisma.ArticleFindUniqueArgs['where'],
) => {
  const res = await prisma.article.findUnique({
    where,
    include: {
      category_list: true,
      author: true,
      comment_list: true,
    },
  });
  return res;
};
export const findArticleMany = async (
  where: Prisma.ArticleFindManyArgs['where'],
) => {
  const res = await prisma.article.findMany({
    where,
    include: {
      category_list: true,
      author: true,
      comment_list: true,
    },
  });
  return res;
};
