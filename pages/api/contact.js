import path from "path";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
require("dotenv").config();

// constants
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const MAIN = process.env.MAIN;

export default function contact(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Only POST requests allowed" });
    }

    return new Promise((resolve, reject) => {
        // destructure incoming data
        const { yourName, yourEmail, yourMessage } = req.body;

        if (!yourName || !yourEmail || !yourMessage) {
            res.status(400).send({
                success: false,
                message: "Bad request",
            });
            reject();
        }

        var transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: USER,
                pass: PASSWORD,
            },
        });

        // point to the template folder
        const handlebarOptions = {
            viewEngine: {
                partialsDir: path.resolve("./templates/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./templates/"),
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
            to: `${MAIN}`,
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
                res.status(500).send({
                    success: false,
                    message: "Internal server error. Please try again later.",
                });
                reject();
            } else {
                transporter.sendMail(mailOptionsClient, function (error, info) {
                    if (error) {
                        res.status(500).send({
                            success: false,
                            message:
                                "Internal server error. Please try again later.",
                        });
                        reject();
                    } else {
                        res.status(200).send({
                            success: true,
                            message: "Request sent",
                        });
                        resolve();
                    }
                });
            }
        });
    });
}
