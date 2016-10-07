/*
    username    : String,
    password    : String,
*/
var Users = require('../models/users')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus
}

function insert(req,res,next){
    var items = new Customers({
      username:req.body.username,
      password:req.body.password,
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Users.findOne({
    _id:req.params.id
  },(err,items) => {
      items.username = req.body.username
      items.password = req.body.password

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Users.findOne({
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
    Users.find({},(err,result) => {
          res.json(result)
    })
}
