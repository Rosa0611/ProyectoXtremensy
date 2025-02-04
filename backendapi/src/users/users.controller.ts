import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { UpdateUsersDto } from 'src/dto/update-users-dto';
import { ConflictException } from '@nestjs/common';
import {NotFoundException} from '@nestjs/common';
import { HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post('/')
    async create(@Body() body:CreateUsersDto){
        try {
            return await this.usersService.create(body);  
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El usuario ya esta Registrado');
            }
            throw error;
        }
    }


    @Get()
    async findAll() {
        
            const user = await this.usersService.finAll();
            if (!user || user.length === 0){
                throw new NotFoundException('La base de datos esta vacia');
            } 
            return user;       
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        try {
            const user = await this.usersService.findOne(id);
            if (!user ){
                throw new NotFoundException('El usuario no existe');
            } 
            return user;
        } catch (error) {
            throw error;
        }
    }


    @Put(':id')
    async update(@Param('id') id:string, @Body() body: UpdateUsersDto){
        try { 
            const user = await this.usersService.update(id,body);
            if(!user){
                throw new NotFoundException('El usuario no Existe');
            }
            return user;
        } catch (error) {
            throw error;
        }      
    }


    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        try {
            const user = await this.usersService.delete(id);
            if (!user ){
                throw new NotFoundException('El usuario no existe');
            } 
            return user;
        } catch (error) {
            throw error;
        }
    }

}
