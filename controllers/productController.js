const productData = require('../models/productData')

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(productData.data)
}
exports.postdata = async(req,res)=>{
    console.log(req.body)
}