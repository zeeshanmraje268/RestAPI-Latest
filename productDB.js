require('dotenv').config();
const connectDB=require('./db/connect');
const Product=require('./models/product');
const productJSON=require('./products.json')

const start=async()=>{
    try{
        await connectDB(process.env.uri);
        await Product.deleteMany();
        await Product.create(productJSON);
        console.log('Success');
    }catch(error){
        console.log(error);
    }
}

start();