var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  var locals = {
    dashboard: false
  };
  res.render('pages/signin', locals);
})

router.get('/signup', function(req, res, next) {
  var locals = {
    dashboard: false
  };
  res.render('pages/signup', locals);
})

router.get('/dashboard', function(req, res, next) {
  var locals = {
    dashboard: true
  };
  res.render('pages/dashboard', locals);
})

router.get('/confirmation', function(req, res, next) {
  var locals = {
    dashboard: true
  };
  res.render('pages/confirmation', locals);
})

module.exports = router
