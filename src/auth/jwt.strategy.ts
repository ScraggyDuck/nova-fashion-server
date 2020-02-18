import { User } from "./../types/user.interface";
import { Payload } from "./../types/payload.interface";
import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { UserService } from "../shared/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: `${process.env.SCRET_KEY}`
    });
  }

  async validate(payload: Payload): Promise<User> {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      throw new HttpException("Unauthorized access", HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}
