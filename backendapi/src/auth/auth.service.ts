import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { Types } from 'mongoose'; 

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async login(email: string, contraseña: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const payload: JwtPayload = { userId: (user._id as Types.ObjectId).toHexString() };
        const accessToken = this.jwtService.sign(payload);

        return { accessToken };
    }
}
