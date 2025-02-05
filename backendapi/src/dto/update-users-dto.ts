import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateUsersDto {

        @IsString()
        @IsOptional() 
        nombre?: string;

        @IsString()
        @IsOptional()
        apellido?: string;

        @IsString()
        @IsOptional()
        email?: string;

        @IsNumber()
        @IsOptional()
        edad?: number;

        @IsString()
        @IsOptional()
        rol?: string;

        @IsString()
        @IsOptional()
        contraseña?: string;

}
