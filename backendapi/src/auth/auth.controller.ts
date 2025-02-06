import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/login-dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

@Post('/login')
    async login(@Body() body: LoginDto) {
        return await this.authService.login(body.email, body.contraseña); // Llamamos al servicio de login
    }
}