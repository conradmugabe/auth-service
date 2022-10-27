import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInUser {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterUser extends SignInUser {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}

export class User extends RegisterUser {
  createdAt: Date;
  updatedAt: Date;
}
