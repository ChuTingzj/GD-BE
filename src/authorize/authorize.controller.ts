import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiOperation } from '@nestjs/swagger';
import type { Response } from 'express';
import { AuthorizeDto } from '@/dto';
import { AuthorizeService } from './authorize.service';

@Controller('authorize')
@ApiTags('授权登录')
export class AuthorizeController {
  constructor(private readonly authorizeService: AuthorizeService) {}
  @Get()
  @ApiOperation({ summary: 'Github 授权登录' })
  @ApiQuery({ type: AuthorizeDto })
  getToken(@Query('code') code, @Res() res: Response) {
    this.authorizeService.getToken(code, res);
  }
}
