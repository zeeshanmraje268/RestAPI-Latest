require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT || 5000;
const product_route=require('./routes/product')
const connectDB=require('./db/connect')
app.get('/',(req,res)=>{
    res.send('<h1>This is Default Page</h1>')
})

app.use('/api/product',product_route);

const start=async()=>{
    try{
        await connectDB(process.env.uri);
        app.listen(port,()=>{
            console.log(`The server is running on ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();