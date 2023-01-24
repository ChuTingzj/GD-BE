import { prisma } from '@/utils';
import type { Prisma } from '@/generated/client';
import { carouselList } from './mock';
export const createCarouselMany = async (
  data: Prisma.CarouselCreateManyArgs['data'],
) => {
  const res = await prisma.carousel.createMany({ data });
  return res;
};
export const createCarousel = async (
  data: Prisma.CarouselCreateArgs['data'] | Prisma.CarouselCreateArgs['data'][],
) => {
  if (Array.isArray(data)) {
    const resList = [];
    for (const item of data) {
      const res = await prisma.carousel.create({ data: item });
      resList.push(res.id);
    }
    return resList;
  } else {
    const res = await prisma.carousel.create({ data });
    return res;
  }
};

export const createCarousel_mock = async () =>
  await createCarousel(carouselList);
export * from './mock';
