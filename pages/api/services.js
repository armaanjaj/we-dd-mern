import path from "path";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
require("dotenv").config();

// constants
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const MAIN = process.env.MAIN;

export default function services(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Only POST requests allowed" });
    }

    return new Promise((resolve, reject) => {
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

        if (
            fName == "" ||
            fName == undefined ||
            lName == "" ||
            lName == undefined ||
            email == "" ||
            email == undefined ||
            phone == "" ||
            phone == undefined ||
            street == "" ||
            street == undefined ||
            city == "" ||
            city == undefined ||
            province == "" ||
            province == undefined ||
            postalCode == "" ||
            postalCode == undefined ||
            serviceType == "" ||
            serviceType == undefined ||
            questionsComments == "" ||
            questionsComments == undefined
        ) {
            res.status(400).send({
                success: false,
                message: "Bad request",
            });
            reject();
        }

        let services = "";
        let loopNum = 1;
        for (let element of serviceType) {
            services += loopNum++ + `. ${element} `;
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
            to: `${email}`,
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

        var mailOptionsOffice = {
            from: '"We-DD" <wedd.rides@gmail.com>',
            to: `${MAIN}`,
            subject: "New service request",
            template: "officeServicesEmail", // the name of the template file i.e email.handlebars
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
