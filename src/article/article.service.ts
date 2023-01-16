import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { ArticleResponse } from '@/entities';

@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}
  create() {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all article`;
  }

  async findOne(id: string) {
    let response: ArticleResponse;
    try {
      const res = await this.prismaService.article.findUnique({
        where: { id },
        include: {
          category_list: true,
          author: true,
          comment_list: true,
        },
      });
      response = Object.assign(
        { data: res as any },
        res.id
          ? {
              success: true,
              message: '操作成功',
            }
          : { success: true, message: '文章不存在' },
      );
    } catch (e) {
      response = {
        success: false,
        message: e.message,
        data: {} as any,
      };
    }
    return response;
  }

  update(id: number) {
    return `This action updates a #${id} article`;
  }

  async remove(id: string) {
    let response = null;
    try {
      const res = await this.prismaService.article.update({
        where: { id },
        data: { isExist: false },
      });
      response = res.id
        ? {
            success: true,
            message: '操作成功',
          }
        : {
            success: false,
            message: '操作失败',
            data: res,
          };
    } catch (e) {
      response = {
        success: false,
        message: e.message,
      };
    }
    return response;
  }
}
