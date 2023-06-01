import { Controller, Get, Post, Body, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BusinessException } from '@/common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { AddUserDto } from './user.dto';

@ApiTags('用户')
@Controller({
  path: 'user',
  version: [VERSION_NEUTRAL],
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Version([VERSION_NEUTRAL, '1']) // 默认前缀版本v1
  findAll() {
    return this.userService.findAll();
  }

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: string = {};
    console.log(a.b.c);
    return this.userService.findAll();
  }

  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return this.userService.findAll();
  }

  @Get('getTestName')
  @Version([VERSION_NEUTRAL, '1'])
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }

  @ApiOperation({
    summary: '新增用户',
  })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }

  @Get()
  @Version('2')
  findAll2() {
    return 'i am new one';
  }
}
