import { Product } from "./product.interface";
import { User } from "./user.interface";
import { Document } from "mongoose";
import { PaymentMethod, OrderRef } from "../models/order.schema";

export interface ProductOrder {
  product: Product;
  quantity: Number;
  size: String;
}

export interface Order extends Document {
  owner: User;
  paymentMethod: PaymentMethod;
  orderRef: OrderRef;
  paid: Boolean;
  products: ProductOrder[];
  createdAt: Date;
  zipCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
}
