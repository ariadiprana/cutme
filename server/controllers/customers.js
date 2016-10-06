/*
    fullName    : String,
    email       : String,
    username    : String,
    password    : String,
    memberId    : String,
    address     : String,
    zipcode     : String,
    phone       : String
*/
var Customers = require('../models/customers')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus
}

function insert(req,res,next){
    var items = new Customers({
      role:req.body.role,
      fullName:req.body.fullName,
      email:req.body.email,
      username:req.body.username,
      password:req.body.password,
      memberId:req.body.memberId,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Customers.findOne({
    _id:req.params.id
  },(err,items) => {
      items.role = req.body.role
      items.fullName = req.body.fullName
      items.email = req.body.email
      items.username = req.body.username
      items.password = req.body.password
      items.memberId = req.body.memberId
      items.address = req.body.address
      items.zipcode = req.body.zipcode
      items.phone = req.body.phone

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Customers.findOne({
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
    Customers.find({},(err,result) => {
          res.json(result)
    })
}
