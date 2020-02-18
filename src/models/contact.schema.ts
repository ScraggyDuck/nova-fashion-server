import * as mongoose from "mongoose";

export const ContactSchema = new mongoose.Schema({
  email: String,
  message: String,
  created: {
    type: Date,
    default: Date.now()
  }
});
