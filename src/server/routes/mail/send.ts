import { createTransport, TransportOptions } from 'nodemailer';
import { google } from 'googleapis';
import { defineEventHandler, readBody, setResponseStatus } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const user = await readBody(event);

    const oAuth2Client = new google.auth.OAuth2(
      process.env['CLIENT_ID'],
      process.env['CLIENT_SECRET'],
      process.env['REDIRECT_URI']
    );
    oAuth2Client.setCredentials({ refresh_token: process.env['REFRESH_TOKEN'] });
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        type: 'oauth2',
        user: process.env['MY_EMAIL'],
        clientId: process.env['CLIENT_ID'],
        clientSecret: process.env['CLIENT_SECRET'],
        refreshToken: process.env['REFRESH_TOKEN'],
        accessToken,
      },
    } as TransportOptions);

    const messageContent = `Message from: ${user.email} via my portfolio:\n\n${user.message}`;

    console.log(process.env['MY_EMAIL']);

    setResponseStatus(event, 200, 'Email sent successfully!');
    return await transporter.sendMail({
      from: user.email,
      to: process.env['MY_EMAIL'],
      subject: 'Message from my portfolio ✔',
      text: messageContent,
    });
  } catch (error) {
    console.error(error);
    setResponseStatus(event, 500, 'Error while trying to send a mail');
    return error;
  }
});
