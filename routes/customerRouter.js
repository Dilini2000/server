const express = require('express');
const customerControler = require('../controllers/customerController')

const router=express.Router();

router.route('/getdata').get(customerControler.getdata)
router.route('/postdata').post(customerControler.postdata)

module.exports = router