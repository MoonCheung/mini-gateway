import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { FeishuService } from './feishu/feishu.service';
import { FeishuController } from './feishu/feishu.controller'
import { User } from './user.mongo.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [
    FeishuController,
    UserController
  ],
  providers: [UserService, FeishuService],
  exports: [UserService, FeishuService],
})
export class UserModule { }