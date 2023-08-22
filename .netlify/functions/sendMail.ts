import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: event.body.email,
    to: process.env.EMAIL,
    subject: 'Hello from Netlify Function',
    text: event.body.message,
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
