// IMPORT NODE_MODULE
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

const nodemailer = require("nodemailer");
require("dotenv").config();

// SET-UP COOKIE SETTINGS
const oneDay = 1000 * 60 * 60 * 24;
let sess = {
    secret: "Thisisasecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: oneDay },
};

var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    },
});

var mailOptions = {
    from: '"We-DD" <wedd.rides@gmail.com>',
    to: `${process.env.MAIN}`,
    subject: "Server running issue",
    html: "<p>There was a problem running your server. Please check your configurations.</p>",
};

// SET UP MIDDLEWARE
app.use(session(sess));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SET-UP HOST SERVER PORT
const port = process.env.PORT || 3001;

// IMPORT ROUTE MODULE -----------------------------------------------
const servicesRoute = require("./routes/Services");
const rideRoute = require("./routes/Ride");
const contactRoute = require("./routes/Contact");

// SET-UP ROUTES USING MODULE------------------------------------------
app.use("/api/ride", rideRoute);
app.use("/api/services", servicesRoute);
app.use("/api/contact", contactRoute);

// LET NODE SERVE THE FILES FOR BUILT REACT APP
app.use(express.static(path.resolve(__dirname, '../client/build')));

// SEND FILES FROM BUILD THE ANY ROUTE
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

// HANDLE IF FILE ON THE ROUTE CANNOT BE LOCATED
app.use((req, res) => {
    res.status(404).send("Route not found.");
});

// app port listener
app.listen(port, (err) => {
    if (err) {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {} else {
                console.log("We have contacted the company.")
            }
        });
    } else {
		console.log(`Server listening on ${port}`)
	}
});
