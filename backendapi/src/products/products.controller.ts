import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { createProductsDto } from 'src/dto/create-products-dto';
import { updateProductsDto } from 'src/dto/update-products-dto';
import { ConflictException } from '@nestjs/common';
import {NotFoundException} from '@nestjs/common';
import { HttpCode } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    }

    @Post('/')
    async create(@Body() body:createProductsDto){
        try {
            return await this.productsService.create(body);  
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El producto ya esta Registrado');
            }
            throw error;
        }
    }


    @Get()
    async findAll() {
        try {
            const prod = await this.productsService.finAll();
            if (!prod || prod.length === 0){
                throw new NotFoundException('La base de datos esta vacia');
            } 
            return prod;
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        try {
            const prod = await this.productsService.findOne(id);
            if (!prod ){
                throw new NotFoundException('El producto no existe');
            } 
            return prod;
        } catch (error) {
            throw error;
        }
    }


    @Put(':id')
    async update(@Param('id') id:string, @Body() body: updateProductsDto){
        try { 
            const prod = await this.productsService.update(id,body);
            if(!prod){
                throw new NotFoundException('La Actividad no Existe');
            }
            return prod;
        } catch (error) {
            throw error;
        }      
    }


    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        try {
            const prod = await this.productsService.delete(id);
            if (!prod ){
                throw new NotFoundException('El producto no existe');
            } 
            return prod;
        } catch (error) {
            throw error;
        }
    }

}
