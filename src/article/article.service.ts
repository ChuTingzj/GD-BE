import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateResponse, ArticleResponse, DeleteResponse } from '@/entities';
import { CreateArticleDto, UpdateArticleDto } from '@/dto';
@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(article: CreateArticleDto) {
    let response: CreateResponse;
    const req_cateList: Array<{ id: string }> = [];
    const {
      cate_name,
      article_title,
      article_description,
      author_id,
      article_content,
      article_bigCover,
      article_cover,
    } = article;
    for (const item of cate_name) {
      try {
        const res = await this.prismaService.category.findUnique({
          where: { cate_name: item },
          select: { id: true },
        });
        res !== null && req_cateList.push(res);
      } catch (e) {
        response = {
          success: false,
          message: e.message,
        };
        return response;
      }
    }
    try {
      const res = await this.prismaService.article.create({
        data: {
          article_title,
          article_content,
          article_cover,
          article_bigCover,
          article_description,
          author_id,
          category_list: {
            connect: req_cateList,
          },
        },
      });
      response = res.id
        ? { success: true, message: '操作成功' }
        : { success: false, message: '操作失败' };
    } catch (e) {
      response = { success: false, message: e.message };
    }
    return response;
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
        { data: res } as any,
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

  async update(id: string, article: UpdateArticleDto) {
    const needUpdate: Record<any, any> = {};
    const cateList: Array<{ id: string }> = [];
    let response: CreateResponse;
    for (const articleKey in article) {
      Reflect.has(article, articleKey) &&
        Reflect.set(needUpdate, articleKey, Reflect.get(article, articleKey));
    }
    if (Reflect.has(needUpdate, 'cate_name')) {
      for (const item of Reflect.get(needUpdate, 'cate_name')) {
        try {
          const res = await this.prismaService.category.findUnique({
            where: { cate_name: item },
            select: { id: true },
          });
         res !== null && cateList.push(res);
        } catch (e) {
          response = {
            success: false,
            message: e.message,
          };
          return response;
        }
      }
      delete needUpdate.cate_name;
    }
    try {
      const origin = await this.prismaService.article.findUnique({
        where: { id },
        select: { category_list: true },
      });
      const res = await this.prismaService.article.update({
        data: {
          ...needUpdate,
          category_list: {
            disconnect: origin.category_list.map((item) => ({ id: item.id })),
            connect: cateList,
          },
        },
        where: { id },
      });
      response = res.id
        ? { success: true, message: '操作成功' }
        : { success: false, message: '操作失败' };
    } catch (e) {
      response = {
        success: false,
        message: e.message,
      };
    }
    return response;
  }

  async remove(id: string) {
    let response: DeleteResponse;
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
