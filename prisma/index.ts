import { createUserMany_mock } from '@/utils/user';
import {
  createArticle_mock,
  deleteArticle,
  findArticle,
} from '@/utils/article';
(async () => {
  try {
    const res = await findArticle({
      id: '05109fb4-6a37-483c-b62a-44fcaa7cf385',
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})();
