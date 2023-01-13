import type { Prisma } from '@/generated/client';
import { prisma } from '@/utils';
export const createCategoryMany = async (
  data: Prisma.CategoryCreateManyArgs['data'],
) => {
  await prisma.category.createMany({
    data,
  });
};
