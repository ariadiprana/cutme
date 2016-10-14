/*
hairStyleId     :   String,
barberId        :   String,
address         :   String,
dt_created      :   Date,
userId          :   String,
status          :   String,
imgBefore       :   { data: Buffer, contentType: String},
imgAfter        :   { data: Buffer, contentType: String}
*/
var Orders = require('../models/orders')

module.exports = {
  insert   : insert,
  display  : display,
  update   : update,
  hapus    : hapus,
  uploadImg: uploadImg
}

function uploadImg(req, res, next){

  var uploadedFile;

  console.log(req.files);
  if (!req.files) {
    res.send('No files were uploaded.')
  }

  uploadedFile = req.files.uploadedFile
  uploadedFile.mv('test.jpg', function(err){

    if (err) {
      res.status(500).send(err)
    } else {
      res.send(uploadedFile.data)
    }
  })
}

function insert(req,res,next){
    var fs = require('fs')

    var items = new Orders({
      hairStyleId:req.body.hairStyleId,
      barberId:req.body.barberId,
      address:req.body.address,
      dt_created:req.body.dt_created,
      userId:req.body.userId,
      status:req.body.status,
      imgBefore: {
        data: req.body.imgBeforeData,
        contentType: 'image/jpg'
      },
      imgAfter: {
        data: req.body.imgAfterData,
        contentType: 'image/jpg'
      }

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
      items.userId = req.body.userId
      items.status = req.body.status
      items.imgBefore.data = req.body.imgBeforeData
      items.imgBefore.contentType = 'image/jpg'
      items.imgAfter.data = req.body.imgAfterData
      items.imgAfter.contentType = 'image/jpg'

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
