import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { createSuppliersDto } from 'src/dto/create-suppliers-dto';
import { updateSuppliersDto } from 'src/dto/update-suppliers-dto';
import { ConflictException } from '@nestjs/common';
import {NotFoundException} from '@nestjs/common';
import { HttpCode } from '@nestjs/common';

@Controller('suppliers')
export class SuppliersController {
    constructor(private SuppliersService: SuppliersService) {
    }

    @Post('/')
    async create(@Body() body:createSuppliersDto){
        try {
            return await this.SuppliersService.create(body);  
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El proveedor ya esta Registrado');
            }
            throw error;
        }
    }


    @Get()
    findAll() {
        return this.SuppliersService.finAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        try {
            const act = await this.SuppliersService.findOne(id);
            if (!act ){
                throw new NotFoundException('El proveedor no existe');
            } 
            return act;
        } catch (error) {
            throw error;
        }
    }


    @Put(':id')
    async update(@Param('id') id:string, @Body() body: updateSuppliersDto){
        try { 
            const act = await this.SuppliersService.update(id,body);
            if(!act){
                throw new NotFoundException('El proveedor no Existe');
            }
            return act;
        } catch (error) {
            throw error;
        }      
    }


    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        try {
            const act = await this.SuppliersService.delete(id);
            if (!act ){
                throw new NotFoundException('El proveedor no existe');
            } 
            return act;
        } catch (error) {
            throw error;
        }
    }

}