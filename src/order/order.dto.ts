import { ProductOrder } from "./../types/order.interface";
import { PaymentMethod, OrderRef } from "../models/order.schema";
export class CreateOrderDTO {
  products: ProductOrder[];
  paymentMethod: PaymentMethod;
  paid: boolean;
  orderRef: OrderRef;
  zipCode: Number;
  address: String;
  city: String;
  state: String;
  country: String;
}
