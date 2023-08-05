// IMPORT NODE_MODULE
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");

// SET-UP COOKIE SETTINGS
const oneDay = 1000 * 60 * 60 * 24;
let sess = {
	secret: "Thisisasecret",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false, maxAge: oneDay},
};

// SET UP MIDDLEWARE
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// SET-UP HOST SERVER PORT
const port = process.env.port || 3360;

// IMPORT ROUTE MODULE -----------------------------------------------
const servicesRoute = require("./routes/Services");
const rideRoute = require("./routes/Ride");
const contactRoute = require("./routes/Contact");

// SET-UP ROUTES USING MODULE------------------------------------------
app.use("/api/ride", rideRoute);
app.use("/api/services", servicesRoute);
app.use("/api/contact", contactRoute);

// handling status errors
app.use((req, res) => {
	res.status(404).send("Route not found.");
});

// app port listener
app.listen(port, (err) => {
	if (err) return console.log(err);
	console.log(`Server up running at 'http://localhost:${port}/'`);
});
