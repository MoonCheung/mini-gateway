import { Controller, Get } from '@nestjs/common';
import { UserCenterService } from './user-center.service';

@Controller()
export class UserCenterController {
  constructor(private readonly userCenterService: UserCenterService) {}

  @Get()
  getHello(): string {
    return this.userCenterService.getHello();
  }
}
