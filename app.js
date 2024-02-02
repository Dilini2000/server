const express = require('express')
const app = express();

const customerRouter = require('./routes/customerRouter')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

app.use(express.json());


app.use('/customer',customerRouter)
app.use('/product',productRouter)
app.use('/user',userRouter)


app.listen(5000,()=>{
    console.log('listening on port 5000')
})
