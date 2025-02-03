import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})

export class users {
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
        trim: true,
        unique: true
    })
    username: string;

    @Prop({
        required: true,
        trim: true
    })
    rol: string;
    
    @Prop({
        required: true,
        trim: true
    })
    contraseña: string;
    
    @Prop({
        required: true,
        trim: true
    })
    telefono: number;
}

export const usersSchema = SchemaFactory.createForClass(users);