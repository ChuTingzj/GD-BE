import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
import { UserList } from './mock';

export const createUserMany = async (data: Prisma.UserCreateManyInput[]) => {
  const res = await prisma.user.createMany({ data });
  return res;
};
export const createUserMany_mock = async () => await createUserMany(UserList);
