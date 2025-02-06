import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema({ timestamps: true })
export class Users extends Document {
    @Prop({ required: true, trim: true })
    nombre: string;

    @Prop({ required: true, trim: true })
    apellido: string;

    @Prop({ required: true, unique: true, trim: true })
    email: string;

    @Prop({ required: true })
    edad: number;

    @Prop({ required: true })
    rol: string;

    @Prop({ required: true, select: false })
    contraseña: string;
}

// Middleware para encriptar la contraseña antes de guardar
const UsersSchema = SchemaFactory.createForClass(Users);

UsersSchema.pre('save', async function (next) {
    if (!this.isModified('contraseña')) return next();
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
});

export { UsersSchema };
