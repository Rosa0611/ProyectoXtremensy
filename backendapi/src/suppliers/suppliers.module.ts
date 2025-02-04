import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { suppliers, SuppliersSchema  } from 'src/schemas/suppliers.schema';

@Module({
    imports: [
            MongooseModule.forFeature([
                {
                name: suppliers.name,
                schema: SuppliersSchema,
                },
            ]),
    ],

    controllers: [SuppliersController],
    providers: [SuppliersService],
})
export class SuppliersModule {}