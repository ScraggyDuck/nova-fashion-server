import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact } from "../types/contact.interface";
import { ContactDTO } from "./contact.dto";
import { MailerService } from "../shared/mailer.service";

@Injectable()
export class ContactService {
  constructor(
    @InjectModel("Contact") private contactModel: Model<Contact>,
    private mailerService: MailerService
  ) {}

  async createContact(contactDTO: ContactDTO): Promise<Contact> {
    const contact = await this.contactModel.create({
      ...contactDTO
    });

    const { email } = contactDTO;

    this.mailerService.sendEmail(email);

    await contact.save();
    return contact;
  }
}
