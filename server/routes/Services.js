const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
require("dotenv").config();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
	loadDefaultValues(req);
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT * FROM background`, function (err, result, fields) {
			con.release();
			if (err) throw err;
			res.render("contact", {
				year: new Date().getFullYear(),
				title: "Contact us",
				contact_image: result[0].contact_page,
			});
		});
	});
});
router.post("/send", (req, res) => {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAIL,
			pass: process.env.PASS,
		},
	});
	var mailOptions = {
		from: `"WeDD" ${process.env.MAIL}`,
		to: `${req.body.email}`,
		subject: "New Contact Request",
		text: `Name: ${req.body.first_name} ${req.body.last_name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nStreet: ${req.body.street}\nCity: ${req.body.city}\nProvince: ${req.body.province}\nPostal: ${req.body.postal}\nService: ${req.body.service}`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return res.status(500).send({
				status: 500,
				message: "Server encountered an error. Please try again later.",
			});
			console.log(error);
		}
	});
});
router.post("/", (req, res) => {
	loadDefaultValues(req);

	let name = req.body.name;
	let address = req.body.address;
	let phone = req.body.phone;
	let service_id = req.body.services;
	let email = req.body.email;
	let comments = req.body.comments;
	let updates = req.body.consent == 1 ? req.body.consent : 0;

	if (name === "" || address === "" || phone === "" || service_id === "" || email === "" || comments === "" || updates === "") {
		res.send("error");
		return;
	}

	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`INSERT INTO requests (request_id,name,address,phone,service_id,email,comments,updates) VALUES (0,'${name}','${address}','${phone}','${service_id}','${email}','${comments}','${updates}') `, function (err, result, fields) {
			con.release();
			if (err) throw err;
		});
	});

	res.redirect("/contact");
});

module.exports = router;
