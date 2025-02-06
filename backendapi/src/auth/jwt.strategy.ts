import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el JWT del encabezado Authorization
        ignoreExpiration: false,
        secretOrKey: 'Xtremensy_secret', // La misma clave secreta que usaste en JwtModule
    });
    }

    async validate(payload: JwtPayload) {
    // Valida el payload (en este caso el userId), se puede extender a más campos según necesites
        const user = await this.usersService.findOne(payload.userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
    }
    return user; // Aquí regresas el usuario, que estará disponible en el request después de la validación
    }
}