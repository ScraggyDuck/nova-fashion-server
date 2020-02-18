import { Product } from "../types/product.interface";

export class CreateProductDTO {
  name: string;
  images: [string];
  price: number;
  desciription: string;
  regularPrice: number;
  colors: [string];
  ratingsQuantity: number;
  quantity: number;
  sizes: [string];
  categories: [string];
  createdAt: Date;
  isFeatured: boolean;
  relatedProducts: [Product];
}
