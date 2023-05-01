const express =require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

//parse request data connect type application to url-encoded type
app.use(bodyParser.urlencoded({extended: false}));

// parse request data to json type
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello World!!!!');
}); 


const bloodbankRoute = require('./src/routes/bloodbank.route');
app.use('/api/bloodbank_products',bloodbankRoute)


const outpatientRoute = require('./src/routes/outpatient.route');
app.use('/api/odp_details',outpatientRoute)



const certificateRoute = require('./src/routes/certificate.route');
app.use('/api/certificate_template',certificateRoute)

const DepartmentRoute = require('./src/routes/department.route');
app.use('/api/departments',DepartmentRoute);

const doctor_wise_route = require('./src/routes/doctor_wise.route');
app.use('/api/doctor_wise',doctor_wise_route);

const leave_type_route = require('./src/routes/leave_type.route');
app.use('/api/leaveTypes',leave_type_route);

const PatientRoute = require('./src/routes/patient.route');
app.use('/api/patient',PatientRoute);

const SpecialistRoute = require('./src/routes/specialist.route');
app.use('/api/specialist',SpecialistRoute);

 const staff_designation_route = require('./src/routes/staff_designation.route');
 app.use('/api/staff_designation',staff_designation_route);






// const StaffRoute = require('./src/routes/staff.route')
// app.use('/api/staff',StaffRoute);

// const Staff_id_card_route = require('./src/routes/staff_id_card.route')
// app.use('/api/staff_id_card',Staff_id_card_route);

// const Patient_id_card_route = require('./src/routes/patient_id_card.route');
// app.use('/api/patient_id_card',Patient_id_card_route);





// const nurse_note_route = require('./src/routes/nurse_note.route');
// app.use('/api/nursenote',nurse_note_route);

// const medicationRoute =require('./src/routes/medication.route');
// app.use('/api/medication',medicationRoute);

// const operationRoute = require('./src/routes/operation.route');
// app.use('/api/operation',operationRoute);

// const chargeRoute = require('./src/routes/charge.route');
// app.use('/api/charge',chargeRoute);

app.listen(port,()=>{
    console.log(`Server is Running in the port ${port}`);
});