import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./product.dto";
import { Product } from "../types/product.interface";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProduct() {
    return await this.productService.findAll();
  }

  @Get(":id")
  async getProductById(@Param("id") id: string): Promise<Product> {
    return await this.productService.findById(id);
  }

  @Get("related/:id")
  async getRelatedProducts(@Param("id") id: string): Promise<Product[]> {
    return await this.productService.findRelatedProducts(id);
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.create(product);
  }
}
