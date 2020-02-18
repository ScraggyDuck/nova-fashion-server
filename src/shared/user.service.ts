import { RegisterDTO, LoginDTO } from "../auth/auth.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { User } from "../types/user.interface";
import * as bcrypt from "bcrypt";
import { Payload } from "../types/payload.interface";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private userModel: Model<User>) {}

  async create(userDTO: RegisterDTO) {
    console.log(userDTO);

    const { email } = userDTO;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }

    userDTO.email = userDTO.email.toLowerCase();
    const createdUser = new this.userModel(userDTO);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async findByLogin(userDTO: LoginDTO) {
    let { email, password } = userDTO;
    email = email.toLowerCase();
    const user = await this.userModel
      .findOne({ email })
      .select("email gender firstName lastName birthdate password created");
    if (!user) {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }

  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized["password"];
    return sanitized;
  }
}
