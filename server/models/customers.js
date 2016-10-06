var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var customerSchema = mongoose.Schema({
    role: String,
    fullName: String,
    email: String,
    username: String,
    password: String,
    memberId : String,
    address: String,
    zipcode: String,
    phone: String
});

module.exports= mongoose.model('customers', customerSchema)
