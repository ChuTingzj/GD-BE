import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ListResponse, ListItemResponse } from './entities/list.entity';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ListService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createListDto: CreateListDto) {
    await this.prismaService.article.create({
      data: createListDto,
    });
  }

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

  async findOne(id: string) {
    let response: ListItemResponse;
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

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
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
