import { DescriptionAndOptions } from "@nestjs/common";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateProductsDto {
    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsString()
    @IsNotEmpty()
    producto: string;

    @IsNumber()
    @IsNotEmpty()
    referencia: number;
    
    @IsNumber()
    @IsNotEmpty()
    tamaño: number;
    
    @IsString()
    @IsNotEmpty()
    medida: string;
    
    @IsNumber()
    @IsNotEmpty()
    cantidad: number;

    @IsNumber()
    @IsNotEmpty()
    precio: number;
    
    @IsNumber()
    @IsNotEmpty()
    total: number;
}
