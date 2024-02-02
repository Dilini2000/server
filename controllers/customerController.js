const customerData = [
    {
        name:'dilini',
        age:20,
        contact:'+94 743 245 689',
    },

    {
        name:'navodya',
        age:18,
        contact:'+94 456 789 123'
    },

    {
        name:'umesha',
        age:21,
        contact:'+94 147 258 369'
    }
]

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(customerData)
}

exports.postdata = async(req,res)=>{
    console.log(req.body)
    
}

