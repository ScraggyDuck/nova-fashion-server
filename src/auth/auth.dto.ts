import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class LoginDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "password too weak"
  })
  password: string;
}

export class RegisterDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  email: string;

  @IsString()
  @MaxLength(20)
  firstName: string;

  @IsString()
  @MaxLength(20)
  lastName: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "password too weak"
  })
  password: string;
}
