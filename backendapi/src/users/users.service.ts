import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'src/schemas/users.schema';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { UpdateUsersDto } from 'src/dto/update-users-dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<Users>){}

    finAll(){
        return this.usersModel.find();
    }

    async create(createUser: CreateUsersDto){
        const newuser = new this.usersModel(createUser);
        return newuser.save();
    }

    async findOne(id: string){
        return this.usersModel.findById(id);
    }

    async update(id: string, updateUser: UpdateUsersDto){
        return this.usersModel.findByIdAndUpdate(id, updateUser, {new: true});
    }

    async delete(id: string){
        return this.usersModel.findByIdAndDelete(id);
    }
}