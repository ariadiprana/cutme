const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var path = require('path')
var port = process.env.PORT || 8080
var mongoose = require('mongoose')
var cors = require('cors')
var configDB = require('./config/database.js');
var passport = require('passport');
var session = require('express-session');
var fileUpload = require('express-fileupload');
var io = require('socket.io')(http);
var http = require('http').Server(app);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

mongoose.connect(configDB.url)
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'resources')));

app.use(session({
  secret: 'cutmeemangkecebanget',
  resave: true,
  saveUninitialized: true
}));

app.use(fileUpload())

app.use(passport.initialize());
app.use(passport.session());

app.use('/api',require('./routes/api'))
app.use(bodyParser())

app.set('view engine', 'ejs'); // set up ejs for templating

app.listen(port)
console.log('server side is alive on Port : '+port);
