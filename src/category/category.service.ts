import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CategoryResponse } from '@/entities';
@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    let response: CategoryResponse;
    try {
      const res = await this.prismaService.category.findMany({
        take: 11,
        orderBy: {
          article_list: {
            _count: 'desc',
          },
        },
      });
      response = {
        data: res,
        message: '操作成功',
        success: true,
      };
    } catch (e) {
      response = {
        data: [],
        message: e.message,
        success: false,
      };
    }
    return response;
  }
}
