const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

require('dotenv').config();

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

app.post('/emails', (req, res) => {
  const { to, subject, body } = req.body;

  const mailOptions = {
    from: 'cian79421@gmail.com', // sender address
    to: to,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));