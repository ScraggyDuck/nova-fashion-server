import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  sendEmail(email: string) {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailDetails = {
      from: "Nova Shop",
      to: email,
      subject: "Email thank you",
      text: "Thank you for contacting us!"
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  }
}
