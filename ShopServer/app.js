//IMPORT PACKAGE
const express = require('express');

let app = express();

app.use(express.json());

app.use(express.static('../public'))

//USING ROUTES


//Export app
module.exports = app;
