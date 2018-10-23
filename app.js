var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var toField, messageField, subjectField;

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'taraseedserver@gmail.com',
		pass: 'Winner04!'
	}
});


app.get('/', function(req,res){
  res.sendfile('contact.html');
});

app.get('/send', function(req,res){
  var mailOptions = {
    from: 'taraseedserver@gmail.com',
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.text
  }
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }
    else{
      console.log("message sent: " + response.message);
      res.end("sent");
    }
  });
});

app.listen(3000, function(){
  console.log("Listening on Port 3000");
});


