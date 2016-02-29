var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var mailer = require('./app/mailer.js');
var fs = require('fs');

exports.sendMail = function(toEmail, emailType, emailActivity) {
  var emailSubject = "You have assigned ownership of a " + emailType;
  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  var auth = {
    auth: {
      api_key: 'key-d4288ca098eebff7793dfbe2aa943a7f',
      domain: 'sandbox5c555bb04a2c41e6b4b4e733d1d0fe50.mailgun.org'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  fs.readFile('./mail.html', 'utf8', function(err, html){
    // mailer.sendMail(toEmail, emailSubject, html);
    nodemailerMailgun.sendMail({
        from: 'poulsondaniel@gmail.com',
        to: toEmail, // An array if you have multiple recipients.
        subject: emailSubject,
        //You can use "html:" to send HTML email content. It's magic!
        html,
      },
      function (err, info) {
      if (err) {
        console.log('Error: ' + err);
      }
      else {
        console.log('Response: ' + info);
      }
    });
  });


};
