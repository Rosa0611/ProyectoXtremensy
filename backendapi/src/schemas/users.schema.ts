import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})

export class Users {
    @Prop({
        required: true,
        trim: true
    })
    nombre: string;

    @Prop({
        required: true,
        trim: true
    })
    apellido: string;

    @Prop({
        required: true,
        unique: true,
        trim: true
    })
    email: string;

    @Prop({
        required: true,
        trim: true
    })
    edad: number;

    @Prop({
        required: true,
        trim: true
    })
    rol: string;
    
    @Prop({
        required: true,
        unique: true,
        trim: true
    })
    contraseña: string;
    
}

export const UsersSchema = SchemaFactory.createForClass(Users);