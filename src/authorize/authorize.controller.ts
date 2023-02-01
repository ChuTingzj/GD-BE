import { Controller, Get, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorizeService } from './authorize.service';

@Controller('authorize')
@ApiTags('授权登录')
export class AuthorizeController {
  constructor(private readonly authorizeService: AuthorizeService) {}
  @Get()
  getCode(@Param() path, @Req() req) {
    console.log(path, req);
  }
}
