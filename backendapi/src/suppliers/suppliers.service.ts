import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { suppliers } from 'src/schemas/suppliers.schema';
import { createSuppliersDto } from 'src/dto/create-suppliers-dto';
import { updateSuppliersDto } from 'src/dto/update-suppliers-dto';

@Injectable()
export class SuppliersService {
    constructor(@InjectModel(suppliers.name) private suppliersModel: Model<suppliers>){}

    finAll(){
        return this.suppliersModel.find();
    }
    async create(createSuppliers: createSuppliersDto){
        const newsuppliers = new this.suppliersModel(createSuppliers);
        return newsuppliers.save();
    }

    async findOne(id: string){
        return this.suppliersModel.findById(id);
    }
    async update(id: string, updateSuppliers: updateSuppliersDto){
        return this.suppliersModel.findByIdAndUpdate(id, updateSuppliers, {new: true});
    }

    async delete(id: string){
        return this.suppliersModel.findByIdAndDelete(id);
    }
}