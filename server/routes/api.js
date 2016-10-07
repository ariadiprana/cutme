const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders')
const customerController = require('../controllers/customers')
const styleController = require('../controllers/styles')
const barberController = require('../controllers/barbers')



router.get('/', function(req, res) {
    res.render('main.ejs');
});

/*
================== Orders API ==================
*/
router.post('/orders', ordersController.insert)
router.get('/orders', ordersController.display)
router.put('/orders/:id', ordersController.update)
router.delete('/orders/:id', ordersController.hapus)
router.post('/orders/uploadImg', ordersController.uploadImg)


//--------------------------------------------//

/*
================ Customer API ================
*/
router.post('/customers', customerController.insert)
router.get('/customers', customerController.display)
router.put('/customers/:id', customerController.update)
router.delete('/customers/:id', customerController.hapus)

/*
================ User API ================
*/
router.post('/users', userController.insert)
router.get('/users', userController.display)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.hapus)

/*
================ Hair Style API ================
*/
router.get('/styles/:type', styleController.display)

/*
================ Barbers API ================
*/
router.get('/barbers/', baberController.display)


module.exports = router
