const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
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
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*", // Or the specific domain you want to allow
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET" // Specify the methods allowed
            },
            body: JSON.stringify({ message: "Message sent successfully" })
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin" : "*", // Or the specific domain you want to allow
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET" // Specify the methods allowed
            },
            body: JSON.stringify({ message: 'Failed to send message' }),
        };
    }
}
