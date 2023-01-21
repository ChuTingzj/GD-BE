import { Injectable } from '@nestjs/common';
import { ListResponse } from '@/entities';
import { ReadListDto } from '@/dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Prisma } from '@/generated/client';
@Injectable()
export class ListService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll(filters: ReadListDto) {
    let response: ListResponse;
    let targetCateId: string;
    const orderBy: Prisma.ArticleOrderByWithRelationInput = Reflect.has(
      filters,
      'hottest',
    )
      ? { like_times: 'desc' }
      : Reflect.has(filters, 'latest')
      ? { createdAt: 'asc' }
      : { id: 'asc' };
    const skip = Reflect.has(filters, 'end_id') ? 1 : 0;
    const cursor_id = Reflect.has(filters, 'end_id')
      ? { id: filters.end_id }
      : {};
    if (Reflect.has(filters, 'cate_name')) {
      try {
        const res = await this.prismaService.category.findUnique({
          where: { cate_name: filters.cate_name },
          select: { id: true },
        });
        res.id && (targetCateId = res.id);
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
      const res = await this.prismaService.article.findMany({
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
        cursor: { ...cursor_id },
        take: 10,
        skip,
      });
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
}
