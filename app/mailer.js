var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

exports.sendMail = function(toEmail, emailSubject, emailHtml) {

  // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
  var auth = {
    auth: {
      api_key: 'key-d4288ca098eebff7793dfbe2aa943a7f',
      domain: 'sandbox5c555bb04a2c41e6b4b4e733d1d0fe50.mailgun.org'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'poulsondaniel@gmail.com',
    to: toEmail, // An array if you have multiple recipients.
    subject: emailSubject,
    //You can use "html:" to send HTML email content. It's magic!
    html: emailHtml,
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
};
