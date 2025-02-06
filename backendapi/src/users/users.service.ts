import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'src/schemas/users.schema';
import { CreateUsersDto } from 'src/dto/create-users-dto';
import { UpdateUsersDto } from 'src/dto/update-users-dto';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

    async findAll() {
        return this.usersModel.find();
    }

    async create(createUser: CreateUsersDto) {
        return new this.usersModel(createUser).save();
    }

    async findOne(id: string) {
        return this.usersModel.findById(id);
    }

    async findByEmail(email: string) {
        return this.usersModel.findOne({ email }).select('+contraseña'); // Se incluye la contraseña para validación
    }

    async update(id: string, updateUser: UpdateUsersDto) {
        return this.usersModel.findByIdAndUpdate(id, updateUser, { new: true });
    }

    async delete(id: string) {
        return this.usersModel.findByIdAndDelete(id);
    }

    // Nuevo método para validar el usuario
    async validateUser(email: string, contraseña: string): Promise<Users | null> {
        const user = await this.usersModel.findOne({ email });

        if (!user) {
            return null; // Usuario no encontrado
        }

        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña); // Compara las contraseñas

        if (!isPasswordValid) {
            return null; // Contraseña incorrecta
        }

        return user; // Retorna el usuario si las credenciales son correctas
    }
}