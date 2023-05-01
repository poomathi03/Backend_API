const productModel = require('../models/bloodbank.model');

exports.createProduct = (req,res)=>{
    const productData = new productModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        productModel.createProduct(productData,(err,product)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' product added successfully',data:product.insertId});

        })
    }
}

exports.getProduct = (req,res)=>{
    productModel.getProduct((err,product)=>{
        if(err)
        res.send(err);
     
        console.log('product ',product);
        res.send(product);
    })
}