const productData = [
    {
        name:'cabage',
        category:'vegetable',
        quantity:200,
        unitPrice:'Rs.500'
    },
    {
        name:'cheese',
        category:'dairy',
        quantity:400,
        unitPrice:'Rs.800'
    },
    {
        name:'orange',
        category:'fruits',
        quantity:500,
        unitPrice:'Rs.200'
    }
]

exports.getdata = async(req,res)=>{
    console.log(req.url)
    res.json(productData)
}
exports.postdata = async(req,res)=>{
    console.log(req.body)
}