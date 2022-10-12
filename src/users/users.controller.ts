import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return { user: createUserDto };
    // return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return {};
    // return this.usersService.findAll();
  }

  @Get(':email')
  findUserByEmail(@Param('email') email: string) {
    return { email };
    // return this.usersService.findUserByEmail({ email });
  }

  @Patch(':id')
  update(@Body() id: string, @Body() updateUserDto: UpdateUserDto) {
    return { id, user: updateUserDto };
    // return this.usersService.updateUserPassword(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
    // return this.usersService.remove(+id);
  }
}
