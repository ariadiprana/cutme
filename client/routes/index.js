var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  var locals = {
    dashboard: false,
    signin: true,
    signup: false
  };
  res.render('pages/signin', locals);
})

router.get('/signup', function(req, res, next) {
  var locals = {
    dashboard: false,
    signin: false,
    signup: true
  };
  res.render('pages/signup', locals);
})

router.get('/dashboard', function(req, res, next) {
  var locals = {
    dashboard: true,
    signin: false,
    signup: false
  };
  res.render('pages/dashboard', locals);
})

router.get('/confirmation', function(req, res, next) {
  var locals = {
    dashboard: true,
    signin: false,
    signup: false
  };
  res.render('pages/confirmation', locals);
})

module.exports = router
