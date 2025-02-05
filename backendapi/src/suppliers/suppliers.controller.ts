import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSuppliersDto } from 'src/dto/create-suppliers-dto';
import { UpdateSuppliersDto } from 'src/dto/update-suppliers-dto';
import { ConflictException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';

@Controller('suppliers')
export class SuppliersController {
    constructor(private suppliersService: SuppliersService) {
    }

    @Post('/')
    async create(@Body() body: CreateSuppliersDto) {
        try {
            return await this.suppliersService.create(body);
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('El proveedor ya esta Registrado');
            }
            throw error;
        }
    }


    @Get()
    async findAll() {
        try {
            const supp = await this.suppliersService.finAll();
            if (!supp || supp.length === 0) {
                throw new NotFoundException('La base de datos esta vacia');
            }
            return supp;
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        try {
            const supp = await this.suppliersService.findOne(id);
            if (!supp) {
                throw new NotFoundException('El proveedor no existe');
            }
            return supp;
        } catch (error) {
            throw error;
        }
    }


    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateSuppliersDto) {
        try {
            const supp = await this.suppliersService.update(id, body);
            if (!supp) {
                throw new NotFoundException('El proveedor no Existe');
            }
            return supp;
        } catch (error) {
            throw error;
        }
    }


    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        try {
            const supp = await this.suppliersService.delete(id);
            if (!supp) {
                throw new NotFoundException('El proveedor no existe');
            }
            return supp;
        } catch (error) {
            throw error;
        }
    }
}