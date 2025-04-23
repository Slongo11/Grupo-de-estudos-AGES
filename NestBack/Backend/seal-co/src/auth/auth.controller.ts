import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthDto';
import { Public } from 'src/public';
//import { AuthGuard } from './auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  @Public()
  login(@Body() authDto: AuthDto): Promise<{ token: string }> {
    return this.authService.login(authDto);
  }
}
