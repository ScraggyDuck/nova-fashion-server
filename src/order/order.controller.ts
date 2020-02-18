import { Controller, Get, UseGuards, Post, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/getUser.decorator';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './order.dto';

@Controller('order')
@UseGuards(AuthGuard())
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  listOrders(@GetUser() { _id }) {
    return this.orderService.listOrdersByUser(_id);
  }

  @Get(':id')
  getOrderById(@GetUser() { _id }, @Param('id') orderId: string) {
    return this.orderService.getOrderById(_id, orderId);
  }

  @Post()
  createOrder(@Body() order: CreateOrderDTO, @GetUser() { _id }) {
    return this.orderService.createOrder(order, _id);
  }
}
