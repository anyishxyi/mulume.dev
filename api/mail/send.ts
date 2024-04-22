import { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 465,
      secure: true,
      auth: {
        type: 'oauth2',
        user: process.env.MY_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const messageContent = `Message from: ${req.body.email} via my portfolio:\n\n${req.body.message}`;

    const result = await transporter.sendMail({
      from: req.body.email,
      to: process.env.MY_EMAIL,
      subject: 'Message from my portfolio ✔',
      text: messageContent,
    });
    res.status(200).send({ body: result, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ body: error, message: 'Error while trying to send a mail' });
  }
}
