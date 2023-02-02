import fetch from 'node-fetch';
import { Headers } from 'node-fetch';
import { Injectable } from '@nestjs/common';
import type { Response } from 'express';
import { PrismaService } from '@/prisma/prisma.service';
import type { GithubUserInfo } from '@/types';
import { CreateResponse } from '@/entities';

@Injectable()
export class AuthorizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getToken(code: string, re: Response) {
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
        select: { id },
      });
      if (res.id) {
        re.redirect(301, `http://124.223.56.117?auth_token=${token}`);
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
}
