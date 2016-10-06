const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var port = process.env.PORT || 8080
var mongoose = require('mongoose')
var cors = require('cors')
var configDB = require('./config/database.js');

mongoose.connect(configDB.url)
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',require('./routes/api'))
app.use(bodyParser())
app.listen(port)
console.log('server side is alive on Port : '+port);
