const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/rideRequest", (req, res) => {
    const { fName, lName, email, phone, pick, drop, pay_mode, car_type } = req.body
    if (fName==""||fName==undefined||lName==""||lName==undefined||email==""||email==undefined||phone==""||phone==undefined||pick==""||pick==undefined||drop==""||drop==undefined||pay_mode==""||pay_mode==undefined||car_type==""||car_type==undefined){

        res.status(400).send({
            data: {
                success: false,
                message: "Bad request"
            }
        })
    }
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
        text: `${fName},${lName},${email},${phone},${pick},${drop},${pay_mode},${car_type}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send({
                data: {
                    success: true,
                    message: "Request sent"
                }
            })
        }
    });

})


module.exports = router;
