const userData = require('../models/userData')

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(userData.data)
}

exports.postdata = async(req,res)=>{
    console.log(req.body)

}