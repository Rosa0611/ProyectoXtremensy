import { IsString, IsNumber, IsNotEmpty, MinLength} from "class-validator";

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
    rol: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    contraseña: string;

}
