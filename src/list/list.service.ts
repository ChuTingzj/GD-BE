import { Injectable } from '@nestjs/common';
import { ArticleEntity, ListResponse } from '@/entities';
import { ReadListDto } from '@/dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Prisma } from '@/generated/client';
@Injectable()
export class ListService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll(filters: ReadListDto) {
    let response: ListResponse;
    let targetCateId: string;
    const isHottest = Reflect.has(filters, 'hottest') && filters.hottest;
    const isLatest = Reflect.has(filters, 'latest') && filters.latest;
    const orderBy: Prisma.ArticleOrderByWithRelationInput = isHottest
      ? { like_times: 'desc' }
      : isLatest
      ? { createdAt: 'desc' }
      : { id: 'asc' };
    const skip = Reflect.has(filters, 'end_id') ? 1 : 0;
    const cursor_id = Reflect.has(filters, 'end_id')
      ? { id: filters.end_id }
      : false;
    if (Reflect.has(filters, 'cate_name')) {
      try {
        const res = await this.prismaService.category.findUnique({
          where: { cate_name: filters.cate_name },
          select: { id: true },
        });
        Reflect.has(res, 'id') && (targetCateId = res.id);
      } catch (e) {
        response = {
          success: false,
          message: e.message,
          data: [],
        };
        return response;
      }
    }
    try {
      const res = await this.prismaService.article.findMany(
        Object.assign(
          {
            include: {
              category_list: true,
              author: true,
              comment_list: true,
            },
            where: {
              isExist: true,
              category_list: {
                every: targetCateId ? { id: targetCateId } : {},
              },
            },
            orderBy: { ...orderBy },
            take: 10,
            skip,
          },
          cursor_id ? ({ cursor: { ...cursor_id } } as any) : {},
        ),
      );
      response = Object.assign(
        { data: res as any },
        res.length
          ? {
              success: true,
              message: '操作成功',
            }
          : {
              success: true,
              message: '文章列表为空',
            },
      );
    } catch (e) {
      response = {
        success: false,
        data: [],
        message: e.message,
      };
    }
    return response;
  }
  async findTopArticle() {
    let response: ListResponse;
    try {
      const res = await this.prismaService.article.findMany({
        orderBy: { like_times: 'desc' },
        take: 4,
      });
      response = {
        data: res as ArticleEntity[],
        success: true,
        message: '操作成功',
      };
    } catch (e) {
      response = {
        data: [],
        success: false,
        message: e.message,
      };
    }
    return response;
  }
}
