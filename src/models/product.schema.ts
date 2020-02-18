import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: String,
  images: [String],
  price: Number,
  desciription: String,
  regularPrice: Number,
  colors: [String],
  ratingsQuantity: Number,
  quantity: Number,
  sizes: [String],
  categories: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  relatedProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
});
