import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCenterService {
  getHello(): string {
    return 'Hello World!';
  }
}
