// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 8080; 				// set the port
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');

// configuration ===============================================================

app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);

//nodemailer
// toEmail, emailSubject, emailHtml
var toEmail = "danielpoulson@icloud.com";
var emailSubject = "This is a passed in value for the email";
var emailHtml = '';
var mailer = require('./app/mailer.js');

fs.readFile('./mail.html', 'utf8', function(err, html){
  mailer.sendMail(toEmail, emailSubject, html);
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);