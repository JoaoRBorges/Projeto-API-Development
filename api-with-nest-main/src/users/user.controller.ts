import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUsr(@Body('name') name: string, @Body('email') email: string) {
    return this.usersService.createUsr(name, email);
  }

  @Get('User')
  DisplayUsers() {
    return this.usersService.DisplayUsers();
  }

  @Get()
  FindAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Delete('delete/:id')
  deleteUsr(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUsr(id);
    return { message: `Usuário ID: ${id} deletado com sucesso` };
  }
}
