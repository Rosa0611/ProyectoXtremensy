import { DescriptionAndOptions } from "@nestjs/common";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    edad: number;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    contraseña: string;

    @IsNumber()
    @IsNotEmpty()
    telefono: number;
}
