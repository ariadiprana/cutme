var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('pages/signin', locals);
})

router.get('/signup', function(req, res, next) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('pages/signup', locals);
})

module.exports = router
