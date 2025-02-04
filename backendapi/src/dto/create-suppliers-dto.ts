import { DescriptionAndOptions } from "@nestjs/common";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class createSuppliersDto {
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
    tipoProducto: string;
    
}