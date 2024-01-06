const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // for example, use Gmail
  auth: {
    user: 'your-email@gmail.com', // your email
    pass: 'your-password' // your email password or app password
  }
});

app.post('/emails', (req, res) => {
  const { to, subject, body } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // sender address
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