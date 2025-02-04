import { IsString, IsNumber, IsOptional} from "class-validator";

export class updateSuppliersDto {


    @IsString()
    @IsOptional()
    proveedor: string;

    @IsNumber()
    @IsOptional()
    celular: number;

    @IsString()
    @IsOptional()
    tipoProducto: string;
    
}