import logo from './logo.svg';
import './App.css';
import PatientForm from './PatientForm';
import React from 'react';
import { useState , useEffect} from 'react';
import PtArray from './PtArray';
import { createBrowserRouter, Route, Routes, useRouteMatch,useParams} from "react-router-dom"
import PtShow from './PtShow';
import NavBar from './NavBar';
import Doctors from './DoctorsNameList';
import DoctorNameList from './DoctorsNameList';

import AddDoctor from './AddDoctor';
function App() {
  const [doctorData,setDoctorData] = useState([])
  const [singlePt,setSinglePt] = useState({})
  // const [patientPostData,setPatientPostData] = useState({})//delete this, get it in doc
  // console.log(patientPostData)
  // const [onePt,setOnePt] = useState("")
  // let history = useHistory()
  useEffect(()=>{
   
    fetch("http://localhost:9292/doctors")
    .then(r=> r.json())
    .then(data=>{setDoctorData(data)})
},[])

//update doctor child
//   let doc = doctorData.find(doctor => doctor.id == patientPostData.doctor_id)
//   let updatedKids = [...doc.patients,patientPostData]
//  let updatedDoc = {...doc,patients: updatedKids}
//  let  updatedArray = doctorData.map(doctor => doctor.id == patientPostData.id? updatedDoc : doctor)
console.log(doctorData)
  
  function handleSubmit(formData){//patients stuff
    console.log(formData)
   
    
    fetch("http://localhost:9292/patients",{
      method: "POST",
      headers: 
      { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          
         name: formData.name,
         dob: formData.dob,
         dos: formData.dos,
         ins: formData.ins,
         doctor_id: formData.doctor_id

         
        }
      )


      
    })
    .then(r=> r.json())
    .then(data=> {let doc = doctorData.find(doctor => doctor.id == data.doctor_id)
      let updatedKids = [...doc.patients,data]
     let updatedDoc = {...doc, patients: updatedKids}
     let  updatedArray = doctorData.map(doctor => doctor.id == data.id? updatedDoc : doctor)
      // setPatientPostData([...patientPostData,data])
      setDoctorData(updatedArray)})

  }
//  function handleSinglePatient(pt){//not usefull (at least fot now)
//   setSinglePt(pt)
//  }

  function handlePatch(studiesForm,params){ 
    console.log(params)
   
    
    // console.log(studiesForm)
    // console.log(params.id)
      fetch(`http://localhost:9292/patients/${params.id}`,{
     
       method:"PATCH",
       headers: {
         "Content-type": "application/json",
       },
       body:JSON.stringify(
         {
           
           days_to_be_seen : studiesForm.days,
           weeks_to_be_seen : studiesForm.weeks,
           months_to_be_seen : studiesForm.months,
           xray_type : studiesForm.xray,
           us_type : studiesForm.us,
           enfd : studiesForm.enfd,
           segm : studiesForm.segm,
           note : studiesForm.note,
         


           


         }
        
         
     
       )})
       .then(r => r.json())
       .then((updatedItem)=> (console.log(updatedItem)));

  }
  console.log(doctorData)

  return (
    

    <div className="App">
    <NavBar/>

      <Routes>
      {/* Route path="/" element={<Home />} /> */}
        <Route exact path="/doctors" element={<DoctorNameList doctorData={doctorData}  handlePost={handleSubmit}/>} />
        {/* <Route path="/doctors/:id"><PatientForm handlePost={handleSubmit} doctorData={doctorData} /></Route> */}
        <Route  path="/doctors/:id" element={<PtArray  doctorData={doctorData}/>} />
        {/* <Route  path="/patients/:id" element={<PtShow  doctorData={doctorData} handlePatch={handlePatch}/>} />   */}

       <Route path="/addDr" element={<AddDoctor/>}/> 

     </Routes>
    </div>
   
    
  );
}

export default App;

// array = [{name:"Bob",kids:[]},{name:"Sue",kids:[]}]
