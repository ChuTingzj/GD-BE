import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
export const deleteArticle = async (
  where: Prisma.ArticleDeleteArgs['where'],
) => {
  const res = await prisma.article.delete({ where });
  return res;
};
