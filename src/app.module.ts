import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "./product/product.module";
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { ContactModule } from "./contact/contact.module";
import { ConfigModule } from "@nestjs/config";
import { OrderModule } from "./order/order.module";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./.env"
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    ProductModule,
    AuthModule,
    SharedModule,
    ContactModule,
    OrderModule
  ],
  controllers: [AppController]
})
export class AppModule {}
