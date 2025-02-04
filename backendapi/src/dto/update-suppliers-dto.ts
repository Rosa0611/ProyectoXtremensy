import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateSuppliersDto {

    @IsNumber()
    @IsOptional()
    nit?: number;

    @IsString()
    @IsOptional()
    proveedor?: string;

    @IsNumber()
    @IsOptional()
    celular?: number;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    tipoProducto?: string;

}