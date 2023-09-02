const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, /* other email-related data */ } = req.body;

  const transporter = nodemailer.createTransport({
    // Configure your email provider's SMTP settings here
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to,
    subject: 'Your Subject',
    text: 'Hello, here is your PDF file!',
    attachments: [
      {
        filename: 'your-file.pdf',
        /* Attach your PDF file here */
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
