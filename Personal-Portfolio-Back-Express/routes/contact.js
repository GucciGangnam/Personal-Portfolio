// Everythign here should be worklig fine 

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Set up a transporter object with your email service provider's SMTP details.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASS
  },
  authMethod: 'login' // Specify the authentication method as 'login'
});

// Define the route to handle POST requests
router.post('/', function (req, res, next) {
  const clientEmail = req.body.email;
  const clientMessage = req.body.message;

  console.log(clientEmail, clientMessage)

  // Handle the email sending
  const mailOptions1 = {
    from: process.env.MY_EMAIL,
    to: clientEmail,
    subject: `Auto reply - I've got your message!`,
    text: `Thanks so much for getting in touch.
          I've been notified about your email and I'll get back in touch as soon as possible.
          See Your message below:
          ${clientMessage}`
  };

  const mailOptions2 = {
    from: process.env.MY_EMAIL,
    to: 'developeramuk@gmail.com', // Specify the recipient for the second email
    subject: 'Notification: New Message Received',
    text: `You've received a new message from ${clientEmail}.
          You have alreadt generated an auto response!
          Message: ${clientMessage}`
  };

  // Send the first email
  transporter.sendMail(mailOptions1, function (error1, info1) {
    if (error1) {
      console.log(error1);
      res.send('Error sending email');
    } else {
      console.log('First email sent: ' + info1.response);
      
      // Send the second email after the first one is sent
      transporter.sendMail(mailOptions2, function (error2, info2) {
        if (error2) {
          console.log(error2);
          res.send('Error sending email');
        } else {
          console.log('Second email sent: ' + info2.response);
          res.send('Emails sent successfully');
        }
      });
    }
  });
});

module.exports = router;