import { Payload } from "./../types/payload.interface";
import { RegisterDTO, LoginDTO } from "./auth.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../shared/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../types/user.interface";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async register(registerDTO: RegisterDTO) {
    return this.userService.create(registerDTO);
  }

  async validateUser(
    loginDTO: LoginDTO
  ): Promise<{ user: User; accessToken: string }> {
    const user = await this.userService.findByLogin(loginDTO);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload: Payload = { email: user.email };
    const accessToken = await this.jwtService.sign(payload);

    user.token = accessToken;
    return user;
  }
}
