const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

router.post("/rideRequest", (req, res) => {
    // destructure incoming data
    const { fName, lName, email, phone, pick, drop, pay_mode, car_type } = req.body;

    if (
        fName == "" ||
        fName == undefined ||
        lName == "" ||
        lName == undefined ||
        email == "" ||
        email == undefined ||
        phone == "" ||
        phone == undefined ||
        pick == "" ||
        pick == undefined ||
        drop == "" ||
        drop == undefined ||
        pay_mode == "" ||
        pay_mode == undefined ||
        car_type == "" ||
        car_type == undefined
    ) {
        res.status(400).send({
            success: false,
            message: "Bad request",
        });
    }
    var transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    });

    // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve("./views/"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./views/"),
    };

    // use a template file with nodemailer
    transporter.use("compile", hbs(handlebarOptions));

    var mailOptions = {
        from: '"We-DD" <wedd.rides@gmail.com>',
        to: `${email}`,
        bcc: [
            {
                name: 'We-DD',
                address: process.env.MAIN
            }
        ],
        subject: "Ride requested successfully",
        template: "rideEmail", // the name of the template file i.e email.handlebars
        context: {
            name: `${fName} ${lName}`,
            email: `${email}`,
            phone: `${phone}`,
            pay_mode: `${pay_mode}`,
            pick: `${pick}`,
            drop: `${drop}`,
            transmisson: `${car_type}`,
        },
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(500).send({
                success: false,
                message: "Internal server error. Please try again later.",
            });
        } else {
            return res.status(200).send({
                success: true,
                message: "Request sent",
            });
        }
    });
});

module.exports = router;
