import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "../types/product.interface";
import { Model } from "mongoose";
import { CreateProductDTO } from "./product.dto";

@Injectable()
export class ProductService {
  constructor(@InjectModel("Product") private productModel: Model<Product>) {}

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new HttpException("Product not found", HttpStatus.NO_CONTENT);
    }
    return product;
  }

  async findRelatedProducts(id: string): Promise<Product[]> {
    const { relatedProducts } = await this.productModel
      .findById(id)
      .populate("relatedProducts");
    return relatedProducts;
  }

  async create(productDTO: CreateProductDTO): Promise<Product> {
    const product = await this.productModel.create({
      ...productDTO
    });
    await product.save();
    return product;
  }
}
