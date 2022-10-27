import { Injectable } from '@nestjs/common';
import { RegisterUser, SignInUser } from './dto/user-email.dto';

@Injectable()
export class AppService {
  registerUser(data: RegisterUser): string {
    return 'You have registered a user!';
  }

  signin(data: SignInUser): string {
    return 'You have successfully signed in';
  }
}
