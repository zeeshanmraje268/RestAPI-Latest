const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
    },
    price:{
        type:Number,
        required:[true,"Price must be provided"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.6
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        lowercase:true,
        enum:{
            values:['apple','samsung','dell','mi','hp','nokia'],
            messege:`{VALUE} is not supported`,
        }
    }
})

module.exports= mongoose.model('Product',productSchema);