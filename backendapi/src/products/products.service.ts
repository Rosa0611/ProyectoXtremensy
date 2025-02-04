import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from 'src/schemas/product.schema';
import { CreateProductsDto } from 'src/dto/create-products-dto';
import { UpdateProductsDto } from 'src/dto/update-products-dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Products.name) private productsModel: Model<Products>){}

    finAll(){
        return this.productsModel.find();
    }

    async create(createProduct: CreateProductsDto){
        const newproduct = new this.productsModel(createProduct);
        return newproduct.save();
    }

    async findOne(id: string){
        return this.productsModel.findById(id);
    }

    async update(id: string, updateProduct: UpdateProductsDto){
        return this.productsModel.findByIdAndUpdate(id, updateProduct, {new: true});
    }

    async delete(id: string){
        return this.productsModel.findByIdAndDelete(id);
    }
}