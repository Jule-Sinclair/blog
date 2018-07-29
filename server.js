const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');

const PORT = process.env.PORT
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);


app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));


const router = require('./router/main')(app, fs);