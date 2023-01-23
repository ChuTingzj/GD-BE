import type { Prisma } from '@/generated/client';
import { prisma } from '@/utils';
import { CategoryList } from './mock';
export const createCategoryMany = async (
  data: Prisma.CategoryCreateManyArgs['data'],
) => {
  await prisma.category.createMany({
    data,
  });
};
export const createCategoryMany_mock = async () =>
  await createCategoryMany(CategoryList);
