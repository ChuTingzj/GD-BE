import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CarouselResponse } from '@/entities';
@Injectable()
export class CarouselService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    let response: CarouselResponse;
    try {
      const res = await this.prismaService.carousel.findMany();
      response = {
        data: res,
        success: true,
        message: '操作成功',
      };
    } catch (e) {
      response = {
        data: [],
        success: false,
        message: e.message,
      };
    }
    return response;
  }
}
