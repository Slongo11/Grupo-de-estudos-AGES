import { Injectable } from '@nestjs/common';
import { RoomDto } from './dto/room.dto';
import { PrismaService } from 'src/prisma.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async createRoom(data: RoomDto) {
    data.acessLevel = Number(data.acessLevel);
    if (data.acessLevel < 1 || data.acessLevel > 5) {
      throw new BadRequestException('Access level must be between 1 and 5');
    }
    const result = this.prisma.room.create({
      data: data,
    });
    return result;
  }

  async updateRoom(id: number, data: RoomDto) {
    if (data.acessLevel < 1 || data.acessLevel > 5) {
      throw new BadRequestException('Access level must be between 1 and 5');
    }

    const room = await this.getRoom(id);

    return this.prisma.room.update({
      where: { id: room.id },
      data: {
        description: data.description,
        acessLevel: data.acessLevel,
      },
    });
  }

  async getRooms() {
    const result = await this.prisma.room.findMany({
      select: {
        id: true,
        description: true,
        acessLevel: true,
      },
    });

    if (!result) {
      throw new NotFoundException('No rooms found');
    }

    return result;
  }

  async getRoom(id: number) {
    const result = await this.prisma.room.findUnique({
      where: { id: id },
    });

    if (!result) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }

    return result;
  }

  async blockRoom(id: number, data: boolean) {
    const room = await this.getRoom(id);

    return this.prisma.room.update({
      where: { id: room.id },
      data: { is_blocked: data },
    });
  }
}
