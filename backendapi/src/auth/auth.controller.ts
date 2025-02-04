import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/login-dto';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
        const { email, password } = loginDto;
        const valid = await this.authService.validateUser(email, password);

        if (!valid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        return await this.authService.login(valid);
    }
}