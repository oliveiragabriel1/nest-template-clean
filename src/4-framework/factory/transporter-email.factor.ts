import nodemailer from 'nodemailer';
/**
 * Produz um transport do nodemailer
 */
const transportEmailFactory = () => {
  const port = process.env.SMTP_PORT as unknown as number;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });
};

export default transportEmailFactory;
