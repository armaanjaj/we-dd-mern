const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

router.post("/serviceRequest", (req, res) => {
    // destructure incoming data
    const {
        fName,
        lName,
        email,
        phone,
        street,
        city,
        province,
        postalCode,
        serviceType,
        questionsComments,
    } = req.body;

    let services = "";
    let loopNum = 1;
    for(element of serviceType)
        services += (loopNum + `. ${element} `); loopNum++;

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
        to: "armaan.jaj@gmail.com",
        subject: "Request received successfully",
        template: "servicesEmail", // the name of the template file i.e email.handlebars
        context: {
            name: `${fName} ${lName}`,
            services: services,
            email: `${email}`,
            phone: `${phone}`,
            address: `${street}, ${city}, ${province}`,
            postalCode: `${postalCode}`,
            questionsComments: `${questionsComments}`,
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
