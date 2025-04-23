import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomDto } from './dto/room.dto';
import { RoomService } from './room.service';
import { Public } from '../public';

@Controller('places')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Public()
  @Post()
  async createRoom(@Body() createRoomDto: RoomDto) {
    createRoomDto.is_blocked = false;
    const result = await this.roomService.createRoom(createRoomDto);
    return result;
  }
  @Public()
  @Put(':id')
  async updateRoom(@Param('id') id: string, @Body() updateRoomDto: RoomDto) {
    const numericId = parseInt(id, 10);
    const result = await this.roomService.updateRoom(numericId, updateRoomDto);
    return result;
  }
  @Public()
  @Get()
  async getRooms() {
    const result = await this.roomService.getRooms();
    return result;
  }

  @Public()
  @Get(':id')
  async getRoom(@Param('id') id: string) {
    const numericId = Number(id);
    const result = await this.roomService.getRoom(numericId);
    return result;
  }

  @Public()
  @Delete(':id')
  async blockRoom(@Param('id') id: string) {
    const numericId = Number(id);
    const result = await this.roomService.blockRoom(numericId, true);
    return result;
  }
}
