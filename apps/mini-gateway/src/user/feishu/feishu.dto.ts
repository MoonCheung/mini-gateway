import { RECEIVE_TYPE, MSG_TYPE } from '@app/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';

export class FeishuMessageDto {
  @IsNotEmpty()
  @IsEnum(RECEIVE_TYPE)
  @ApiProperty({ example: 'email', enum: RECEIVE_TYPE })
  receive_id_type: RECEIVE_TYPE

  @IsNotEmpty()
  @ApiProperty({ example: 'ikmoons.is@gmail.com' })
  receive_id?: string

  @IsNotEmpty()
  @ApiProperty({ example: '{\"text\":\" test content\"}' })
  content?: string

  @IsNotEmpty()
  @IsEnum(MSG_TYPE)
  @ApiProperty({ example: 'text', enum: MSG_TYPE })
  msg_type?: MSG_TYPE
}

// 获取飞书用户信息
export class FeishuUserInfo {
  accessToken?: string;
  email: string;
  avatarUrl: string;
  avatarThumb: string;
  avatarBig: string;
  avatarMiddle: string;
  mobile: string;
  enName: string;
  name: string;
  feishuUserId: string;
  feishuUnionId: string;
}

// 获取用户Token
export class GetUserTokenDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'xxxx', description: '飞书临时登录凭证' })
  code: string;
  app_token: string | unknown;
}