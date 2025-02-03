import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { users } from 'src/schemas/users.schema';
import { createUsersDto } from 'src/dto/create-users-dto';
import { updateUsersDto } from 'src/dto/update-users-dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(users.name) private usersModel: Model<users>){}

    finAll(){
        return this.usersModel.find();
    }

    async create(createUser: createUsersDto){
        const newuser = new this.usersModel(createUser);
        return newuser.save();
    }

    async findOne(id: string){
        return this.usersModel.findById(id);
    }

    async update(id: string, updateUser: updateUsersDto){
        return this.usersModel.findByIdAndUpdate(id, updateUser, {new: true});
    }

    async delete(id: string){
        return this.usersModel.findByIdAndDelete(id);
    }
}