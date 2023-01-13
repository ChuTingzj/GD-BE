import type { Prisma } from '@/generated/client';

export const UserList: Prisma.UserCreateManyArgs['data'] = [
  {
    user_name: 'author酱',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/9d12359c78702e5b67c6c1497160ebba~100x100.awebp',
  },
  {
    user_name: '掘金酱',
    avatar:
      'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/mirror-assets/168e0858b6ccfd57fe5~tplv-t2oaga2asx-no-mark:180:180:180:180.awebp',
  },
];
