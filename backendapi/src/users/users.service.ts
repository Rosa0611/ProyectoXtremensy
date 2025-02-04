import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'src/schemas/users.schema';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { UpdateUsersDto } from 'src/dto/update-users-dto';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<Users>){}

    finAll(){
        return this.usersModel.find();
    }

    async create(createUser: CreateUsersDto): Promise<Users> {
        const exists = await this.usersModel.findOne({ email: createUser.email });
        if (exists) throw new ConflictException('El email ya está registrado');
        
        const newUser = new this.usersModel(createUser);
        return newUser.save();
    }

    async findOneByEmail(email: string): Promise<Users | null> {
        return this.usersModel.findOne({ email }).select('+contraseña').exec();
    }

    async findOne(id: string) {
        return this.usersModel.findById(id);
    }

    async update(id: string, updateUser: any){
        return this.usersModel.findByIdAndUpdate(id, updateUser, {new: true});
    }

    async delete(id: string){
        return this.usersModel.findByIdAndDelete(id);
    }
}