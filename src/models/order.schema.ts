import * as mongoose from "mongoose";

export enum PaymentMethod {
  CHECK = "Check",
  BANK_WIRE = "Bank wire"
}

export enum OrderRef {
  TXEPVMNGK = "TXEPVMNGK",
  EMYOINTHG = "EMYOINTHG"
}

export const OrderSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  paymentMethod: {
    type: PaymentMethod
  },
  orderRef: {
    type: OrderRef
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: Boolean,
  zipCode: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      },
      size: String
    }
  ]
});
