const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({extended: true}));

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'maulana.robert.mr@gmail.com',
        pass: 'pgg773sG56'
    }
});

router.get("/", (req, res) => {
  res.render("index", {data: "", status:""})
});

router.post("/", (req, res) => {

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${'Robert Maulana'} <${req.body.pengirim}>`, // sender address
      to: `${'Robert Maulana'} <${req.body.penerima}>`, // list of receivers
      subject: `${req.body.subject}`, // Subject line
      text: `${req.body.isi}`, // plain text body
      html: `<b>${req.body.isi}</b>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.render("index", {data:"", status:"failed!"})
      }else {
      }
      res.render("index", {data:"", status:"success!"})
  });


})

module.exports = router
