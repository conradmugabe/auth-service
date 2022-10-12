import { User } from '../entities/user.entity';

export abstract class UsersRepository {
  abstract getUserByEmail(email: string): Promise<User | undefined>;
  abstract getUserById(id: string): Promise<User | undefined>;
  abstract updateUserPassword(props: {
    id: string;
    password: string;
  }): Promise<void>;
  abstract deleteUserById(id: string): Promise<void>;
  abstract activateUserAccount(id: string): Promise<void>;
  abstract deactivateUserAccount(id: string): Promise<void>;
  abstract createUser({ email, password }): Promise<User>;
}
