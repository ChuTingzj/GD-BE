import fetch from 'node-fetch';
import { Headers } from 'node-fetch';
import { Injectable } from '@nestjs/common';
import type { Response } from 'express';
import { PrismaService } from '@/prisma/prisma.service';
import type { GithubUserInfo } from '@/types';

@Injectable()
export class AuthorizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getToken(code: string, res: Response) {
    try {
      const res_token = await fetch(
        `https://github.com/login/oauth/access_token`,
        {
          method: 'POST',
          body: {
            client_id: '983cf4b3feff31bba087',
            client_secret: '7a20564d4c78a7bb055f8cde2b1b25a07d5a5a32',
            code,
          },
        },
      );
      const text = await res_token.text();
      const textArr = text.split('&');
      const headers = new Headers({
        Authorization: `Bearer ${textArr[0]}`,
      });
      const res_userInfo = await fetch(`https://api.github.com/user`, {
        headers,
      });
      const json_userInfo: GithubUserInfo = await res_userInfo.json();
      console.log(json_userInfo);
    } catch (e) {
      res.send(e.message);
    }
  }
}
