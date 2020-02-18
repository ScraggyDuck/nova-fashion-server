import { Document } from "mongoose";
import { Gender } from "../models/user.schema";

export interface User extends Document {
  readonly password: String;
  gender: Gender;
  birthdate: String;
  firstName: String;
  lastName: String;
  email: String;
  createdAt: Date;
}
