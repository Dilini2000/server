const userData = [
    {
        name:'amali',
        age:20,
        contact:'+94 743 245 689',
    },

    {
        name:'shanaka',
        age:18,
        contact:'+94 456 789 123'
    },

    {
        name:'manoj',
        age:21,
        contact:'+94 147 258 369'
    }
]

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(userData)
}

exports.postdata = async(req,res)=>{
    console.log(req.body)

}