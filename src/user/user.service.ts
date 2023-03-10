import { Injectable } from '@nestjs/common';
import { UserResponse, DeleteResponse } from '@/entities';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(id: string) {
    let response: UserResponse;
    try {
      const res = await this.prismaService.user.findUnique({
        where: { id },
        include: {
          authorization: true,
          article_list: true,
          focuser_list: true,
          follower_list: true,
        },
      });
      response = res.id
        ? {
            data: res as any,
            success: true,
            message: '操作成功',
          }
        : {
            data: null,
            success: false,
            message: '用户不存在',
          };
    } catch (e) {
      response = {
        data: null,
        success: false,
        message: e.message,
      };
    }
    return response;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    let response: DeleteResponse;
    try {
      const res = await this.prismaService.user.update({
        where: { id },
        data: { isExist: false },
      });
      response = res.id
        ? { success: true, message: '操作成功!' }
        : { success: false, message: '操作失败' };
    } catch (e) {
      response = {
        success: false,
        message: e.message,
      };
    }
    return response;
  }
}
