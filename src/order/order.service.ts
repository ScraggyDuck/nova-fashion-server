import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "../types/order.interface";
import { CreateOrderDTO } from "./order.dto";

@Injectable()
export class OrderService {
  constructor(@InjectModel("Order") private orderModel: Model<Order>) {}

  async listOrdersByUser(userId: string) {
    const orders = await this.orderModel
      .find({ owner: userId })
      .populate("owner")
      .populate("products.product");

    if (!orders) {
      throw new HttpException("No Orders Found", HttpStatus.NO_CONTENT);
    }
    return orders;
  }

  async getOrderById(userId: string, orderId: string) {
    const order = await this.orderModel
      .find({ owner: userId, _id: orderId })
      .populate("owner")
      .populate("products.product");

    if (!order) {
      throw new HttpException("No Order Found", HttpStatus.NO_CONTENT);
    }
    return order[0];
  }

  async createOrder(orderDTO: CreateOrderDTO, userId: string) {
    const createOrder = {
      owner: userId,
      ...orderDTO
    };

    const { _id } = await this.orderModel.create(createOrder);
    let order = await this.orderModel
      .findById(_id)
      .populate("products.product");
    return order;
  }
}
