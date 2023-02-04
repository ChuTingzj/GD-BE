import { Controller, Get, Query, Res, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';
import type { Response } from 'express';
import { AuthorizeDto, CreateUserOrLoginByPasswordDto } from '@/dto';
import { CreateResponse, ByPasswordResponse } from '@/entities';
import { AuthorizeService } from './authorize.service';

@Controller('authorize')
@ApiTags('登录')
export class AuthorizeController {
  constructor(private readonly authorizeService: AuthorizeService) {}
  @Get()
  @ApiOperation({ summary: 'Github 授权登录' })
  @ApiQuery({ type: AuthorizeDto })
  @ApiOkResponse({ type: CreateResponse })
  getGithubToken(@Query('code') code, @Res() res: Response) {
    return this.authorizeService.getGithubToken(code, res);
  }
  @Post('/password')
  @ApiOperation({ summary: '密码注册登录' })
  @ApiBody({ type: CreateUserOrLoginByPasswordDto })
  @ApiOkResponse({ type: ByPasswordResponse })
  signInOrLoginByPassword(@Body() body: CreateUserOrLoginByPasswordDto) {
    const { account, password } = body;
    return this.authorizeService.signInOrLoginByPassword(account, password);
  }
}
