var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var fs = require('fs');

exports.sendMail = function(toEmail, emailType, emailActivity) {
  var emailSubject = "You have assigned ownership of a " + emailType;
  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  var auth = {
    auth: {

    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  fs.readFile('./mail.html', 'utf8', function(err, html){
    // mailer.sendMail(toEmail, emailSubject, html);
    var html = `<html><body STYLE="font-size: 12pt/14pt; font-family:sans-serif">
      <h3>You have been assigned this ${emailType}</h3></br> ${emailActivity} </br> ${html} </body></html>`;
    nodemailerMailgun.sendMail({
        from: 'daniel.poulson@fmc.com',
        to: toEmail, // An array if you have multiple recipients.
        subject: emailSubject,
        //You can use "html:" to send HTML email content. It's magic!
        html: html,
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
