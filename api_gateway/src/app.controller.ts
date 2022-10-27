import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterUser, SignInUser } from './dto/user-email.dto';

@Controller('/api/v1/auth/users/email')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/register')
  registerUser(data: RegisterUser): string {
    return this.appService.registerUser(data);
  }

  @Post('/signin')
  signInUser(data: SignInUser) {
    return this.appService.signin(data);
  }
}
