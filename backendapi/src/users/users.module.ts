import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema  } from 'src/schemas/users.schema';

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: Users.name,
                schema: UsersSchema,
              },
            ]),
  ],

  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}


