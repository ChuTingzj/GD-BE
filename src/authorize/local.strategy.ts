import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { PassportStrategy } from '@nestjs/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { PrismaService } from '@/prisma/prisma.service';
import { ReadResponse } from '@/entities';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }
  async validate(username: string, password: string) {
    let response: ReadResponse;
    try {
      const res = await this.prismaService.user.findUnique({
        where: { user_name: username },
        select: { password: true },
      });
      if (res === null) {
        response = {
          message: '用户名不存在',
          success: false,
        };
      } else {
        response = !compareSync(password, res.password)
          ? { message: '密码不正确', success: false }
          : { message: '操作成功', success: true };
      }
    } catch (e) {
      response = {
        message: e.message,
        success: false,
      };
    }
    return response;
  }
}
