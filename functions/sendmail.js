const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `New message from ${email}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: 'Message sent successfully' };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: 'Failed to send message' };
    }
}
