import { DescriptionAndOptions } from "@nestjs/common";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateSuppliersDto {
    @IsNumber()
    @IsNotEmpty()
    nit: number;

    @IsString()
    @IsNotEmpty()
    proveedor: string;

    @IsNumber()
    @IsNotEmpty()
    celular: number;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    tipoProducto: string;

}