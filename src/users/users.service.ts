import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './interfaces/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findUserByEmail(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.repository.getUserByEmail(email);
    if (user === undefined) {
      // throw 400 invalid credentials
    }
    return user;
  }

  async findUserById(createUserDto: CreateUserDto) {
    const { id } = createUserDto;
    return this._findUserById(id);
  }

  async updateUserPassword(id: string, updateUserDto: UpdateUserDto) {
    const { password } = updateUserDto;
    await this._findUserById(id);
    return this.repository.updateUserPassword({ id, password });
  }

  async deleteUser(id: string) {
    await this._findUserById(id);
    return this.repository.deleteUserById(id);
  }

  private async _findUserById(id: string): Promise<User> {
    const user = await this.repository.getUserById(id);
    if (user === undefined) {
      // throw 400 invalid credentials
    }
    return user;
  }
}
