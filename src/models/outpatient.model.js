var dbConn = require('../../config/db.config')
var Opd_details = function(opd_details){
    this.case_reference_id = opd_details.case_reference_id;
    this.patient_id = opd_details.patient_id;
    this.generated_by = opd_details.generated_by;
    this.is_ipd_moved = opd_details.is_ipd_moved;
    this.discharged = opd_details.discharged;
    this.created_at = opd_details.created_at;
}
//create new leave type
Opd_details.createPatient = (patient_type_data,result)=>{
    dbConn.query('insert into opd_details SET ?', patient_type_data, (err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('patient inserted Successfully');
            result(null,res)
        }
    });
}
// get leave type

Opd_details.getPatient = (result) =>{
    dbConn.query('SELECT * FROM opd_details',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patient fetched ');
            result(null,res);
        }
    })
}



    module.exports = Opd_details;