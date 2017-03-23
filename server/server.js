// @flow

const express = require('express');
const app = express();
const path = require('path');
const _rootPath: string = process.cwd();
process.env.PORT = '8080';
process.env.NODE_ENV = 'development';

const _port: string = process.env.PORT;
const _env: string = process.env.PORT;

app.set('views', _rootPath + "/app/");
app.set('view engine', 'ejs');

app.get('/*', function (req, res) {
  res.render('index');
});

app.listen(_port, function() {
      console.log('Express server 🌎  listening on port ' + _port);
    console.log(`env = ${_env}
      __dirname = ${__dirname}
      process.cwd = ${_rootPath}`);
});
