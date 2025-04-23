import {
  Injectable,
  NotFoundException,
  BadRequestException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { UserDto } from './dto/UserDto';
import { PrismaService } from '../prisma.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async createUser(data: UserDto): Promise<UserDto> {
    const user = await this.getUserByEmail(data.email);
    if (user) {
      throw new BadRequestException(
        `User with email ${data.email} already exists.`,
      );
    }
    const hashedPassword = (await this.authService.makeHash(data.password))
      .hash;

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        level: data.level,
        profile_img: data.profile_img,
        createdAt: new Date(),
        deletedAt: null,
      },
    });
  }

  async deleteUser(id: number): Promise<UserDto> {
    id = Number(id);
    if (id === 1) {
      throw new BadRequestException(`User with ID ${id} cannot be deleted.`);
    }
    const user = await this.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    return this.prisma.user.delete({ where: { id: id } });
  }

  async updateUser(id: number, updateDto: UserDto): Promise<UserDto> {
    id = Number(id);
    if (id === 1 && updateDto?.level !== 5) {
      throw new BadRequestException(`User with ID ${id} cannot be updated.`);
    }
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        name: updateDto?.name,
        email: updateDto?.email,
        password: updateDto?.password,
        level: updateDto?.level,
        profile_img: updateDto?.profile_img,
        createdAt: updateDto?.createdAt,
        deletedAt: updateDto?.deletedAt,
      },
    });
  }

  async getUser(id: number): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException(`Usuario com ID ${id} não encontrado`);
    }
    return user;
  }

  async getUsers(): Promise<UserDto[] | null> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async getUserByEmail(email: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return user;
  }
}
