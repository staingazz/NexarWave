import mailgun from 'mailgun-js';
import User from '../models/User.js';

// Initialize Mailgun with your API Key and Domain
const mg = mailgun({
  apiKey: process.env.API_KEY ,
  domain: process.env.MG_DOMAIN,
});

// POST: Add email to waitlist and send confirmation
export const addToWaitlist = async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Save email to the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already on the waitlist.' });
    }

    const newUser = new User({ email });
    await newUser.save();

    // Prepare the email message
    const data = {
      from: 'Nexar Wave <hello@nexarwave.com>',
      to: email,
      subject: 'Welcome to NexarWave!',
      text: 'Thank you for signing up.',
      html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f3f4f6;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .body {
            font-size: 16px;
            line-height: 1.5;
            color: #333333;
            padding: 0 20px;
          }
          .cta-button {
            display: inline-block;
            padding: 12px 20px;
            background-color: #3b82f6;
            color: #ffffff;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
            margin-top: 20px;
          }
          .footer {
            font-size: 14px;
            color: #777777;
            text-align: center;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Body -->
          <div class="body">
            <p>Hello ,</p>
            <p>Thank you for signing up and joining our waitlist! We’re thrilled to have you with us.</p>
            <p>We’re working hard behind the scenes to bring you something special, and we promise to notify you <strong>as soon as we launch</strong>. You’ll be the first to know!</p>
            <p>In the meantime, we’d love your feedback to help us improve. Please take a moment to fill out our quick survey:</p>
            <a href="https://your-survey-link.com" class="cta-button">Take the Survey</a>
          </div>
          <!-- Footer -->
          <div class="footer">
            <p>Thank you for your patience! If you have any questions, feel free to reply to this email.</p>
            <p>Best regards, <br> The Nexar Wave Team</p>
          </div>
        </div>
      </body>
    </html>
  



      `,
    };

    // Send email
    await mg.messages().send(data);

    res.status(201).json({ message: 'Welcome to the waitlist! Check your email for confirmation.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};
