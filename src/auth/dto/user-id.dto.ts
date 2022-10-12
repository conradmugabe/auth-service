import { IsNotEmpty, IsString } from 'class-validator';

export abstract class UserIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
