import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserResponse, DeleteResponse, UpdateResponse } from '@/entities';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: '根据id获取用户信息' })
  @ApiOkResponse({ type: UserResponse })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更改用户信息' })
  @ApiOkResponse({ type: UpdateResponse })
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '注销用户' })
  @ApiOkResponse({ type: DeleteResponse })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
