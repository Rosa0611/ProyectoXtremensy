import { Controller, Get, Post, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { UpdateUsersDto } from 'src/dto/update-users-dto';
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/dto/login-dto';
import { JwtGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post('/')
    async create(@Body() body: CreateUsersDto) {
        try {
            return await this.usersService.create(body);  
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('El usuario ya está registrado');
            }
            throw error;
        }
    }

    @Get()
    @UseGuards(JwtGuard) // Protección con JWT
    async findAll() {
            const user = await this.usersService.findAll();
            if (!user || user.length === 0) {
                throw new NotFoundException('La base de datos está vacía');
                }
            return user;
        
    }

    @Get(':id')
    @UseGuards(JwtGuard) // Protección con JWT
    async findOne(@Param('id') id: string) {
            const user = await this.usersService.findOne(id);
            if (!user) {
                throw new NotFoundException('El usuario no existe');
            }
            return user;
    }

    @Put(':id')
    @UseGuards(JwtGuard) // Protección con JWT
    async update(@Param('id') id: string, @Body() body: UpdateUsersDto) {
            const user = await this.usersService.update(id, body);
            if (!user) {
                throw new NotFoundException('El usuario no existe');
        }
            return user;
    }

    @Delete(':id')
    @UseGuards(JwtGuard) // Protección con JWT
    async delete(@Param('id') id: string) {
            const user = await this.usersService.delete(id);
            if (!user) {
                throw new NotFoundException('El usuario no existe');
        }
            return user;
    }
}
