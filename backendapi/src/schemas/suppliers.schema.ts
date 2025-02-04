import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})

export class suppliers {
    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    nit: number;

    @Prop({
        required: true,
        trim: true
    })
    proveedor: string;

    @Prop({
        required: true,
        trim: true
    })
    celular: number;

    @Prop({
        required: true,
        trim: true
    })
    tipoProducto: string;

}
export const SuppliersSchema = SchemaFactory.createForClass(suppliers);