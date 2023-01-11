import { createUserMany_mock } from '@/utils/user';
import { createArticleMany_mock, deleteArticle } from '@/utils/article';
(async () => {
  try {
    const res = await createArticleMany_mock();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})();
