import { Test, TestingModule } from '@nestjs/testing';
import { UserCenterController } from './user-center.controller';
import { UserCenterService } from './user-center.service';

describe('UserCenterController', () => {
  let userCenterController: UserCenterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserCenterController],
      providers: [UserCenterService],
    }).compile();

    userCenterController = app.get<UserCenterController>(UserCenterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userCenterController.getHello()).toBe('Hello World!');
    });
  });
});
