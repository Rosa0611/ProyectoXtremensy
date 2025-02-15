import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';

dotenv.config(); 

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rosarosero0611:Atlas@cluster0.gxse5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
      dbName: 'xtremensy',
    }
  ),
    ProductsModule,
    UsersModule,
    SuppliersModule,
    AuthModule
  ],

})
export class AppModule { }

