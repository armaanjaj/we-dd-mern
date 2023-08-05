const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

router.post("/", (req, res) => {
    // destructure incoming data
    const { yourName, yourEmail, yourMessage } = req.body;

    if (
        yourName == "" ||
        yourName == undefined ||
        yourEmail == "" ||
        yourEmail == undefined ||
        yourMessage == "" ||
        yourMessage == undefined
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

    var mailOptionsClient = {
        from: '"We-DD" <wedd.rides@gmail.com>',
        to: `${yourEmail}`,
        subject: "We received your query successfully",
        template: "contactEmail", // the name of the template file i.e email.handlebars
        context: {
            name: `${yourName}`,
            email: `${yourEmail}`,
            message: `${yourMessage}`,
        },
    };

    var mailOptionsOffice = {
        from: '"We-DD" <wedd.rides@gmail.com>',
        to: `${process.env.MAIN}`,
        subject: "New contact request",
        template: "officeContactEmail", // the name of the template file i.e email.handlebars
        context: {
            name: `${yourName}`,
            email: `${yourEmail}`,
            message: `${yourMessage}`,
        },
    };

    transporter.sendMail(mailOptionsOffice, function (error, info) {
        if (error) {
            return res.status(500).send({
                success: false,
                message: "Internal server error. Please try again later.",
            });
        } else {
            transporter.sendMail(mailOptionsClient, function (error, info) {
                if (error) {
                    return res.status(500).send({
                        success: false,
                        message:
                            "Internal server error. Please try again later.",
                    });
                } else {
                    return res.status(200).send({
                        success: true,
                        message: "Query processed successfully",
                    });
                }
            });
        }
    });
});

module.exports = router;
