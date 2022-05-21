import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2b4c644dc1733f",
        pass: "860c9d4f0519ef"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Paulo Henrique <paulo.henrique1080p@gmail.com>',
        subject,
        html: body,
    })
    };
}