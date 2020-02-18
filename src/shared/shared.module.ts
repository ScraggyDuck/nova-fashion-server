import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserSchema } from "../models/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { MailerService } from "./mailer.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  providers: [UserService, MailerService],
  exports: [UserService, MailerService]
})
export class SharedModule {}
