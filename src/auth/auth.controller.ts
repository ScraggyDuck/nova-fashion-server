import { User } from "./../types/user.interface";
import { RegisterDTO, LoginDTO } from "./auth.dto";
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "./getUser.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  register(@Body(ValidationPipe) registerDTO: RegisterDTO) {
    return this.authService.register(registerDTO);
  }

  @Post("login")
  async login(
    @Body(ValidationPipe) userDTO: LoginDTO
  ): Promise<{ user: User; accessToken: string }> {
    return this.authService.validateUser(userDTO);
  }

  @Post("test")
  @UseGuards(AuthGuard())
  async test(@GetUser() user: User) {
    console.log(user);
  }
}
