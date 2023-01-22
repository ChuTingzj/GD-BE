import { createUserMany_mock,createCarousel_mock } from '@/utils';
import {
  createArticle_mock,
  deleteArticle,
  findArticle,
} from '@/utils/article';
(async () => {
  try {
    const res = await createCarousel_mock();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})();
