const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config()


const { email_service, user, pass } = process.env;


const transporter = nodemailer.createTransport({
    service: email_service,
    auth: {
        user: user,
        pass: pass,
    }
});

const mailOptions = {
    from: user,
    to: 'hwn123h@gmail.com',
    subject: 'NodeMailer Test',
    html: `<h1>테스트 이메일</h1><p>성공</p>`
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error(err);

    } else {
        console.log('email sent: ', info);
    }
});


