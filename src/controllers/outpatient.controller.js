const patientModel = require('../models/outpatient.model');

exports.createPatient = (req,res)=>{
    const patientData = new patientModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        patientModel.createPatient(patientData,(err,patient)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' patient added successfully',data:patient.insertId});

        })
    }
}

exports.getPatient = (req,res)=>{
    patientModel.getPatient((err,patient)=>{
        if(err)
        res.send(err);
     
        console.log('patient ',patient);
        res.send(patient);
    })
}