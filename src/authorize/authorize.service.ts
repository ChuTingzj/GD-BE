import fetch from 'node-fetch';
import { Headers } from 'node-fetch';
import { Injectable } from '@nestjs/common';
import type { Response } from 'express';
import { compareSync, hashSync } from 'bcryptjs';
import { PrismaService } from '@/prisma/prisma.service';
import type { GithubUserInfo } from '@/types';
import { CreateResponse, ByPasswordResponse } from '@/entities';
@Injectable()
export class AuthorizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getGithubToken(code: string, re: Response) {
    let response: CreateResponse;
    try {
      const res_token = await fetch(
        `https://github.com/login/oauth/access_token?client_id=983cf4b3feff31bba087&client_secret=7a20564d4c78a7bb055f8cde2b1b25a07d5a5a32&code=${code}`,
      );
      const data = await res_token.text();
      const token = data.split('&')[0].split('=')[1];
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
      });
      const res_userInfo = await fetch(`https://api.github.com/user`, {
        headers,
      });
      const json_userInfo: GithubUserInfo = await res_userInfo.json();
      const { login, avatar_url } = json_userInfo;
      const res_find = await this.prismaService.user.findUnique({
        where: { user_name: login },
        select: { id: true },
      });
      if (res_find !== null) {
        response = {
          success: false,
          message: '用户名已被占用!',
        };
        return response;
      }
      const res = await this.prismaService.user.create({
        data: {
          user_name: login,
          avatar: avatar_url,
          authorization: {
            create: [
              {
                authorizedBy: 'Github',
                authToken: token,
              },
            ],
          },
        },
        select: { id: true },
      });
      if (res !== null) {
        re.redirect(301, `http://124.223.56.117?id=${res.id}`);
        response = {
          success: true,
          message: '操作成功!',
        };
      } else {
        response = {
          success: false,
          message: '注册用户失败!',
        };
      }
    } catch (e) {
      response = {
        success: false,
        message: e.message,
      };
    }
    return response;
  }
  async signInOrLoginByPassword(account: string, password: string) {
    let responseErr: CreateResponse;
    let responseSuc: ByPasswordResponse;
    try {
      const res = await this.prismaService.user.findUnique({
        where: { user_name: account },
        select: { id: true, password: true },
      });
      if (res !== null) {
        const isOk = compareSync(password, res.password);
        if (!isOk) {
          responseErr = {
            success: false,
            message: '密码错误！',
          };
        } else {
          responseSuc = {
            success: true,
            message: '操作成功',
            data: res.id,
          };
        }
      } else {
        const hashPassword = hashSync(password, 10);
        const res_create = await this.prismaService.user.create({
          data: {
            user_name: account,
            account,
            password: hashPassword,
            avatar:
              'https://p3-passport.byteimg.com/img/mosaic-legacy/3796/2975850990~100x100.awebp',
          },
          select: { id: true },
        });
        if (res_create !== null) {
          responseSuc = {
            success: true,
            message: '操作成功',
            data: res_create.id,
          };
        } else {
          responseErr = {
            success: false,
            message: '注册用户失败',
          };
        }
      }
    } catch (e) {
      responseErr = {
        success: false,
        message: e.message,
      };
    }
    return responseErr ? responseErr : responseSuc;
  }
}
