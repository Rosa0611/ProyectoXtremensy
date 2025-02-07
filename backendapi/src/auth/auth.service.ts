import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async register(createUserDto: CreateUsersDto) {
        // Hashear la contraseña
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.contraseña, salt);
        
        // Guardar usuario
        const newUser = await this.usersService.create({
            ...createUserDto,
            contraseña: hashedPassword
        });

        return newUser;
    }

    async login(email: string, contraseña: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const payload: JwtPayload = { userId: user._id.toString() };
        const accessToken = this.jwtService.sign(payload);

        return { accessToken };
    }
}
