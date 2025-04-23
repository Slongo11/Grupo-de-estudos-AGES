import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/UserDto';
import { Public } from '../public';

@Controller('users')
export class UserController {
  constructor(private userServices: UserService) {}

  @Public()
  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserDto> {
    return this.userServices.createUser(userDto);
  }
  @Public()
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateDto: UserDto,
  ): Promise<void> {
    await this.userServices.updateUser(id, updateDto);
  }
  @Public()
  @Get()
  async getUsers() {
    return this.userServices.getUsers();
  }
  @Public()
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<UserDto | null> {
    return this.userServices.getUser(id);
  }

  @Public()
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userServices.deleteUser(id);
  }
}
