const express = require('express');
const userController = require('../controllers/userController')

const router=express.Router();

router.route('/getdata').get(userController.getdata)

router.route('/postdata').post(userController.postdata)

module.exports = router