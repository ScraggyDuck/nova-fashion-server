import { Document } from "mongoose";

export interface Product extends Document {
  name: String;
  images: [String];
  price: Number;
  desciription: String;
  regularPrice: Number;
  colors: [String];
  ratingsQuantity: Number;
  quantity: Number;
  sizes: [String];
  categories: [String];
  createdAt: Date;
  isFeatured: Boolean;
  relatedProducts: [Product];
}
