var dbConn = require('../../config/db.config')
var Bloodbank_product = function(bloodbank_product){
    this.name = bloodbank_product.name;
    this.is_blood_group = bloodbank_product.is_blood_group;
    this.created_at = bloodbank_product.created_at;
}
//create new leave type
Bloodbank_product.createProduct = (product_type_data,result)=>{
    dbConn.query('insert into blood_bank_products SET ?', product_type_data, (err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('leave type inserted Successfully');
            result(null,res)
        }
    });
}
// get leave type

Bloodbank_product.getProduct = (result) =>{
    dbConn.query('SELECT * FROM blood_bank_products',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('leave types  fetched ');
            result(null,res);
        }
    })
}



    module.exports = Bloodbank_product;