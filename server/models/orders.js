var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    hairStyleId:String,
    barberId:String,
    address:String,
    dt_created:Date,
    userId:String,
    status:String,
    imgBefore:{ data: Buffer, contentType: String},
    imgAfter:{ data: Buffer, contentType: String}
})

module.exports= mongoose.model('order', orderSchema)
