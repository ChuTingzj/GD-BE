import fetch from 'node-fetch';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AuthorizeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getToken(code: string) {
    console.log(code);
    const res = await fetch(
      `https://github.com/login/oauth/access_token?client_id=983cf4b3feff31bba087&client_secret=7a20564d4c78a7bb055f8cde2b1b25a07d5a5a32&code=${code}`,
    );
    console.log(res.text());
  }
}
