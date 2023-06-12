import { Module } from '@nestjs/common';
import { UserCenterController } from './user-center.controller';
import { UserCenterService } from './user-center.service';

@Module({
  imports: [],
  controllers: [UserCenterController],
  providers: [UserCenterService],
})
export class UserCenterModule {}
