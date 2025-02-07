import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { LoginDto } from 'src/dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUsersDto) {
    return this.authService.register(createUserDto);
  }

  @Post('/login')
  async login(@Body() body: LoginDto) {
    return await this.authService.login(body.email, body.contraseña);
  }
}

