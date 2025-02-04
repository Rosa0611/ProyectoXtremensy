import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { products, ProductSchema  } from 'src/schemas/product.schema';

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: products.name,
                schema: ProductSchema,
              },
            ]),
  ],

  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}


