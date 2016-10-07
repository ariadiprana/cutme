const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders')
const customerController = require('../controllers/customers')


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

module.exports = router
