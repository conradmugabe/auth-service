import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/interfaces/users.repository';
import { EmailDto } from './dto/email.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserIdDto } from './dto/user-id.dto';
import { Hash } from './interfaces/hash.interface';
import { Jwt } from './interfaces/jwt.interface';
import { NotificationService } from './interfaces/notificationService.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly hash: Hash,
    private readonly jwt: Jwt,
    private readonly notificationService: NotificationService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.repository.getUserByEmail(email);
    if (user === undefined) {
      // throw 400 invalid credentials
    }
    if (!user.isVerified) {
      // throw 403 forbidden action
    }
    const passwordsMatch = this.hash.compare(password, user.password);
    if (!passwordsMatch) {
      // throw 400 invalid credentials
    }
    return this.jwt.generate({ userId: user.id });
  }

  async register({ email, password }: RegisterDto) {
    const user = await this.repository.getUserByEmail(email);
    if (user) {
      // throw 400 invalid credentials
    }
    const hashedPassword = await this.hash.hash(password);
    await this.repository.createUser({ email, password: hashedPassword });
    await this.sendVerificationEmail({ email });
  }

  async activateUserAccount({ id }: UserIdDto) {
    const user = this.repository.getUserById(id);
    if (user === undefined) {
      // throw 404 user does not exist
    }
    return this.repository.activateUserAccount(id);
  }

  async deactivateUserAccount({ id }: UserIdDto) {
    const user = this.repository.getUserById(id);
    if (user === undefined) {
      // throw 404 user does not exist
    }
    return this.repository.deactivateUserAccount(id);
  }

  async sendVerificationEmail({ email }: EmailDto) {
    await this.notificationService.notify({ to: email, message: '' });
  }
}
