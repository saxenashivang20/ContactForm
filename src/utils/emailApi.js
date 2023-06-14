import axios from 'axios';

export const sendEmail = async (recipient, subject, body) => {
  const sendGridApiKey = 'YOUR_SENDGRID_API_KEY';
  const sendGridEndpoint = 'https://api.sendgrid.com/v3/mail/send';

  const emailData = {
    personalizations: [
      {
        to: [
          {
            email: recipient,
          },
        ],
        subject,
      },
    ],
    from: {
      email: 'your-email@example.com',
    },
    content: [
      {
        type: 'text/plain',
        value: body,
      },
    ],
  };

  try {
    const response = await axios.post(sendGridEndpoint, emailData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendGridApiKey}`,
      },
    });

    console.log('Email sent:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
