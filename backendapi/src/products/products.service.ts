import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { products } from 'src/schemas/products.schema';
import { createProductsDto } from 'src/dto/create-products-dto';
import { updateProductsDto } from 'src/dto/update-products-dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(products.name) private productsModel: Model<products>){}

    finAll(){
        return this.productsModel.find();
    }

    async create(createProduct: createProductsDto){
        const newproduct = new this.productsModel(createProduct);
        return newproduct.save();
    }

    async findOne(id: string){
        return this.productsModel.findById(id);
    }

    async update(id: string, updateProduct: updateProductsDto){
        return this.productsModel.findByIdAndUpdate(id, updateProduct, {new: true});
    }

    async delete(id: string){
        return this.productsModel.findByIdAndDelete(id);
    }
}