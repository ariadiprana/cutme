/*
  hairStyleId     :String,
  barberName      :String,
  address         :String,
  dt_created      :Date,
  customerId      :String,
  status          :String,
  hairPreference  :String
*/
var Orders = require('../models/orders')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus
}

function insert(req,res,next){
    var items = new Orders({
      hairStyleId:req.body.hairStyleId,
      barberName:req.body.barberName,
      address:req.body.address,
      dt_created:req.body.dt_created,
      customerId:req.body.customerId,
      status:req.body.status,
      hairPreference:req.body.hairPreference
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      items.hairStyleId = req.body.hairStyleId
      items.barberName = req.body.barberName
      items.address = req.body.address
      items.dt_created = req.body.dt_created
      items.customerId = req.body.customerId
      items.status = req.body.status
      items.hairPreference = req.body.hairPreference

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Orders.findOne({
    _id:req.params.id
  },(err,items) => {
      if(err)throw err

      items.remove((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function display(req,res,next){
    Orders.find({},(err,result) => {
          res.json(result)
    })
}