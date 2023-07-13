
import './App.css';
import PatientForm from './PatientForm';
import React from 'react';
import { useState, useEffect } from 'react';
import PtArray from './PtArray';
import { Route, Routes, } from "react-router-dom"
import PtShow from './PtShow';
import NavBar from './NavBar';
import DoctorNameList from './DoctorsNameList';
import EditDoctor from './EditDoctor';
import AddDoctor from './AddDoctor';
import Home from './Home';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [doctorData, setDoctorData] = useState([])

  const [realDrId,setDrParam] = useState("")  //since patch for pts do not have acess to doctors params, we use this line to get the doctor id and send the patient to the corresponding patient.
  const [singleDr, setSingleDr] = useState("") //we are setting default values to the edit form. Also since the edit route do  not have doctors params, we use this to send the dr id to the dr patch request.

  useEffect(() => {

    fetch("http://localhost:9292/doctors")
      .then(r => r.json())
      .then(data => { setDoctorData(data) })
  }, [])


  console.log(doctorData)
  function handleAddDoctor(data) {
    fetch("http://localhost:9292/doctors", {
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
      .then(r => r.json())
      .then(dat => doctorData.push(dat))


  }

  function handlePostPt(formData) {
    console.log(formData)


    fetch("http://localhost:9292/patients", {
      method: "POST",
      headers:
        { "Content-Type": "application/json" },
      body: JSON.stringify({

        name: formData.name,
        dob: formData.dob,
        dos: formData.dos,
        ins: formData.ins,
        doctor_id: formData.doctor_id

      })


    })
      .then(r => r.json())
      .then(data => {
        let doc = doctorData.find(doctor => doctor.id === data.doctor_id)
        let updatedPatients = [...doc.patients, data]
        let updatedDoc = { ...doc, patients: updatedPatients }
        let updatedArray = doctorData.map(doctor => doctor.id === data.doctor_id ? updatedDoc : doctor)
     
        setDoctorData(updatedArray)
      })

  }



    
  
 
  function handlePatch(studiesForm, id) {


    fetch(`http://localhost:9292/patients/${id}`, {

      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(
        {

          days_to_be_seen: studiesForm.days,
          weeks_to_be_seen: studiesForm.weeks,
          months_to_be_seen: studiesForm.months,
          xray_type: studiesForm.xray,
          us_type: studiesForm.us,
          enfd: studiesForm.enfd,
          segm: studiesForm.segm,
          note: studiesForm.note,
          doctor_id: realDrId
        }
      )
    })
      .then(r => r.json())
      .then((updatedItem) => (console.log(updatedItem)));

  }
  console.log(doctorData)
  



  function handleDrPatch(data) {

    fetch(`http://localhost:9292/doctors/${data.id}`, {


      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(
        {
          name: data.name,
          specialty: data.specialty
        }


      )
    })
      .then(r => r.json())
      .then((updatedItem) =>{ let updated = doctorData.map((doctor)=> {if (doctor.id === updatedItem.id) {
        return updatedItem;
      } else {
        return doctor;
      }}
      
      )
      setDoctorData(updated)
         console.log(updatedItem)
        toast.success('You Changed Doctor Info!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } ).catch(r=> toast.error("Oops, something went wrong " + r.message))



  }

  const handleDeleteDr = (id) => {
    fetch(`http://localhost:9292/doctors/${id}`, {

      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })

    let filtered = doctorData.filter( doctor => doctor.id !== id)
    setDoctorData(filtered)

    console.log("deleting..")

  }



  console.log(singleDr)
  return (


    <div className="App">
      <NavBar />

      <Routes>
        < Route path="/" element={<Home />} />
        <Route exact path="/doctors" element={<DoctorNameList doctorData={doctorData} handleDeleteDr={handleDeleteDr} setSingleDr={setSingleDr}/>} />
        <Route path="/doctors/:doctor_id/patients/new" element={<PatientForm handlePostPt={handlePostPt} doctorData={doctorData} />} />
        <Route path="/doctors/:id" element={<PtArray setDrParam={setDrParam} doctorData={doctorData} />} />
        <Route path="/patients/:id" element={<PtShow doctorData={doctorData} handlePatch={handlePatch} />} />

        <Route path="/doctors/new" element={<AddDoctor handlePost={handleAddDoctor} />} /> 
        <Route path="/doctors/:id/edit" element={<EditDoctor handleDrPatch={handleDrPatch} singleDr={singleDr} />} />
        
      </Routes>
      <ToastContainer />
    </div>


  );
}

export default App;

// array = [{name:"Bob",kids:[]},{name:"Sue",kids:[]}]
