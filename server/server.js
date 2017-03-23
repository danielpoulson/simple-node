// @flow

const express = require('express');
const app = express();
const path = require('path');
process.env.PORT = '8080';
process.env.NODE_ENV = 'development';

const _port: string = process.env.PORT;
const _env: string = process.env.PORT;

app.engine('html', require('ejs').renderFile);

app.get('/*', function (req, res) {
  res.render(path.join(__dirname + '/../app/index.html'));
});

app.listen(_port, function() {
      console.log('Express server 🌎  listening on port ' + _port);
    console.log(`env = ${_env}
      __dirname = ${__dirname}
      process.cwd = ${process.cwd()}`);
});
