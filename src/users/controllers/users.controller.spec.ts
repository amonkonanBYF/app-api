import { Test, TestingModule } from '@nestjs/testing';
import { UserDto } from '../dto/users.dto';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  let user = new UserDto()
  user.email = "email"
  user.password = "brin"

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined user correct user value email and password', () => {
    expect(user.email).toBe("email")
    expect(user.password).toBe("brin")
  })

  it('should be defined user type mail error ', () => {
    expect(user.email).toBe("email")
    expect(user.password).toBe("brin")
  })

  it('should be defined user password not good', () => {
    expect(user.email).toBe("ema")
    expect(user.username).toBe("fab")
  })
  

});
