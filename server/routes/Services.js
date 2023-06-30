const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/serviceRequest", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'wedd.rides@gmail.com',
            pass: 'kdcvmcornnssalnu'
        }
    });

    // point to the template folder
    // const handlebarOptions = {
    //     viewEngine: {
    //         partialsDir: path.resolve('./views/'),
    //         defaultLayout: false,
    //     },
    //     viewPath: path.resolve('./views/'),
    // };

    // use a template file with nodemailer
    // transporter.use('compile', hbs(handlebarOptions))


    var mailOptions = {
        from: '"We-DD" <wedd.rides@gmail.com>',
        to: 'armaan.jaj@gmail.com',
        subject: 'New Request',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})

module.exports = router;
