import { Controller, Post, Body } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactDTO } from "./contact.dto";
import { Contact } from "../types/contact.interface";

@Controller("contact")
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post("send")
  async create(@Body() contact: ContactDTO): Promise<Contact> {
    return await this.contactService.createContact(contact);
  }
}
