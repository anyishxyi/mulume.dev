import { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify('Missing request body'),
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const requestBody = JSON.parse(event.body);

  const mailOptions = {
    from: requestBody.email,
    to: process.env.EMAIL,
    subject: 'Hello from Netlify Function',
    text: requestBody.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify('Email sent successfully'),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Error sending email'),
    };
  }
};

export { handler };
