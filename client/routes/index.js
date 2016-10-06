var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  //res.render('master')
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('pages/home', locals);
})

module.exports = router
