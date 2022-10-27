import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  registerUser(): string {
    return 'You have registered a user!';
  }
}
