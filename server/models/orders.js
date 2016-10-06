var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    hairStyleId:String,
    barberName:String,
    address:String,
    dt_created:Date,
    customerId:String,
    status:String,
    hairPreference:String,
    imgBefore:{ data: Buffer, contentType: String},
    imgAfter:{ data: Buffer, contentType: String}
})

module.exports= mongoose.model('order', orderSchema)
