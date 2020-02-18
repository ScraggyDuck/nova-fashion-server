import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderSchema } from "../models/order.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: "Order", schema: OrderSchema }])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
