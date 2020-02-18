import { ContactSchema } from "./../models/contact.schema";
import { Module } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { MongooseModule } from "@nestjs/mongoose";
import { SharedModule } from "../shared/shared.module";

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: "Contact", schema: ContactSchema }])
  ],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
