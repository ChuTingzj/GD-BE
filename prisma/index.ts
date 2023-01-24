import {
  createUserMany_mock,
  createCarousel_mock,
  createCategoryMany_mock,
} from '@/utils';
(async () => {
  try {
    const res = await createCarousel_mock();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})();
