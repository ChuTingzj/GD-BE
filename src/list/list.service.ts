import { Injectable } from '@nestjs/common';
import { ListResponse } from '@/entities';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ListService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    let response: ListResponse;
    try {
      const res = await this.prismaService.article.findMany({
        include: {
          category_list: true,
          author: true,
          comment_list: true,
        },
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
