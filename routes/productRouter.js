const express = require('express');

const productController = require('../controllers/productController')


const router=express.Router();

router.route('/getdata').get(productController.getdata)

router.route('/postdata').post(productController.postdata)

module.exports = router