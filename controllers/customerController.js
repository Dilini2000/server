const customerData = require('../models/customerData')

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(customerData.data)
}

exports.postdata = async(req,res)=>{
    console.log(req.body)
    
}

