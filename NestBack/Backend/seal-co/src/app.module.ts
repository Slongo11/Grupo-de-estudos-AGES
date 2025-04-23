import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { RoomModule } from './rooms/room.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, RoomModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
