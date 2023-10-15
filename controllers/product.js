const Product=require('../models/product');

const getAllProduct=async(req,res)=>{
    
    const {name}=req.query;
    const {rating}=req.query;
    const {price}=req.query;
    const {company}=req.query;
    const {sort}=req.query;
    const {select}=req.query;
    const queryObject={};
    
   
    
    if(name){
        queryObject.name=name;
    }

    if(rating){
        queryObject.rating=rating;
    }

    if(price){
        queryObject.price=price;
    }

    if(company){
        queryObject.company=company;
    }

    let apiData=Product.find(queryObject);

    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    
    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.limit) ||3;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    
   
   
    const myData=await apiData;
    res.status(200).json({per_page:myData.length,page,totalObject:"13",myData});
}

const getAllProductTesting=async(req,res)=>{
    const {name,price,rating,company,sort,select}=req.query;
    const queryObject={};
    
    if(name){
        queryObject.name=name;
    }

    if(rating){
        queryObject.rating=rating;
    }

    if(price){
        queryObject.price=price;
    }

    if(company){
        queryObject.company=company;
    }

    let apiData=Product.find(queryObject);

    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    
    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.limit) ||3;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    
   
   
    const myData=await apiData;
    res.status(200).json({per_page:myData.length,page,totalObject:"13",myData});
}

module.exports={getAllProduct,getAllProductTesting}