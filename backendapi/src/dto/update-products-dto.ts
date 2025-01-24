import { IsString, IsNumber, IsOptional } from "class-validator";

export class updateProductsDto {

        @IsString()
        @IsOptional()
        categoria?: string;

        @IsString()
        @IsOptional()
        producto?: string;

        @IsString()
        @IsOptional()
        referencia?: number;

        @IsNumber()
        @IsOptional()
        tamaño?: number;

        @IsString()
        @IsOptional()
        medida?: string;

        @IsNumber()
        @IsOptional()
        cantidad?: number;

        @IsNumber()
        @IsOptional()
        precio?: number;

        @IsNumber()
        @IsOptional()
        total?: number;
}
