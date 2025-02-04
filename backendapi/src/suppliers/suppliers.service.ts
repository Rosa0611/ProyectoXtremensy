import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Suppliers } from 'src/schemas/suppliers.schema';
import { CreateSuppliersDto } from 'src/dto/create-suppliers-dto';
import { UpdateSuppliersDto } from 'src/dto/update-suppliers-dto';

@Injectable()
export class SuppliersService {
    constructor(@InjectModel(Suppliers.name) private suppliersModel: Model<Suppliers>){}

    finAll(){
        return this.suppliersModel.find();
    }
    async create(createSuppliers: CreateSuppliersDto){
        const newsuppliers = new this.suppliersModel(createSuppliers);
        return newsuppliers.save();
    }

    async findOne(id: string){
        return this.suppliersModel.findById(id);
    }
    async update(id: string, updateSuppliers: UpdateSuppliersDto){
        return this.suppliersModel.findByIdAndUpdate(id, updateSuppliers, {new: true});
    }

    async delete(id: string){
        return this.suppliersModel.findByIdAndDelete(id);
    }
}