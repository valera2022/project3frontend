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
import EditDoctor from './EditDoctor';
import AddDoctor from './AddDoctor';
import Home from './Home';

function App() {
  const [doctorData,setDoctorData] = useState([])
  const [drId,setDrId] = useState("")
  const [realDrId,setRealDrId] = useState("")
  
  useEffect(()=>{
   
    fetch("http://localhost:9292/doctors")
    .then(r=> r.json())
    .then(data=>{setDoctorData(data)})
  },[])


  console.log(doctorData)
  function handleAddDoctor(data){
    fetch("http://localhost:9292/doctors",{
          method: "POST",
          headers: 
          { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
              name: data.name,
              specialty: data.specialty
            }
          )
      })
          .then(r=> r.json())
          .then(dat=> doctorData.push(dat))


  }
  
  function handlePostPt(formData){//patients stuff
    console.log(formData)
   
    
    fetch("http://localhost:9292/patients",{
      method: "POST",
      headers: 
      { "Content-Type": "application/json" },
      body: JSON.stringify({
          
         name: formData.name,
         dob: formData.dob,
         dos: formData.dos,
         ins: formData.ins,
         doctor_id: formData.doctor_id

      } )


    })
    .then(r=> r.json())
    .then(data=> {let doc = doctorData.find(doctor => doctor.id == data.doctor_id)
      let updatedKids = [...doc.patients,data]
     let updatedDoc = {...doc, patients: updatedKids}
     let  updatedArray = doctorData.map(doctor => doctor.id == data.id? updatedDoc : doctor)
      // setPatientPostData([...patientPostData,data])
      setDoctorData(updatedArray)})

  }


  function handleUniversalDrId(id){
    setRealDrId(id)


  }
  console.log(realDrId)
  function handlePatch(studiesForm,id){ 
   
   
    fetch(`http://localhost:9292/patients/${id}`,{
     
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
           doctor_id: realDrId   
         }
    )})
       .then(r => r.json())
       .then((updatedItem)=> (console.log(updatedItem)));

  }
  console.log(doctorData)
  function handleDrId(id){
    // console.log(id)
    setDrId(id)
  }
 

  function handleDrPatch(data){
    
    fetch(`http://localhost:9292/doctors/${drId}`,{
      
    
      method:"PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(
        {
          name: data.name,
          specialty: data.specialty
        }
       
        
      )
    })
    .then(r => r.json())
    .then((updatedItem)=> (console.log(updatedItem)));



  }

  function handleDeleteDr(){
     fetch(`http://localhost:9292/doctors/${drId}`,{
    
      method:"DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(r => r.json())
      .then((updatedItem)=> (console.log(updatedItem)));


  }
  // debugger;

  return (
    

   <div className="App">
     <NavBar/>

     <Routes>
      < Route path="/" element={<Home />} /> 
      <Route exact path="/doctors" element={<DoctorNameList doctorData={doctorData} handleDrId={handleDrId} handleDeleteDr={handleDeleteDr} />} />
      <Route path="/addPt/:id" element ={<PatientForm handlePostPt={handlePostPt} doctorData={doctorData} drId={drId}/>}/>
      <Route  path="/doctors/:id" element={<PtArray handleUniversalDrId={handleUniversalDrId} doctorData={doctorData}/>} />
      <Route  path="/patients/:id" element={<PtShow  doctorData={doctorData} handlePatch={handlePatch}/>} />  

      <Route path="/addDr" element={<AddDoctor handlePost={handleAddDoctor}/>}/> 
      <Route path="/editDr" element={<EditDoctor handleDrPatch={handleDrPatch}/>} />
       {/* <Route path="/deleteDr" element/> */}

     </Routes>
   </div>
   
    
  );
}

 export default App;

// array = [{name:"Bob",kids:[]},{name:"Sue",kids:[]}]
