import { User } from "./../types/user.interface";
import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator(
  (data, req): User => {
    return req.user;
  }
);
