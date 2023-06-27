import React from 'react' 
import { useEffect,useState } from 'react'
import DoctorLink from './DoctorLink'
import { BrowserRouter, Route, Routes, Switch, useHistory, useRouteMatch,useParams} from 'react-router-dom';
import PatientForm from './PatientForm';
// import DrArray from './DrArray';

export default function DoctorNameList({doctorData,patientData,handlePost}) {
  console.log(doctorData)
 
    // const [doctors,setDoctors] = useState([])
    // useEffect(() => {
    //     fetch("https://localhost:9292/doctors")
    //     .then(r=> r.json())
    //     .then(data => {setDoctors(data)})
    // })
    // let history = useHistory()
    const doctorList = doctorData.map((doctor)=><DoctorLink doctor={doctor}/>)
    console.log(doctorList)

    // function handleSubmit(formData){//patients stuff
    //   //   console.log(formData)
       
        
    //      fetch("http://localhost:9292/patients",{
    //        method: "POST",
    //        headers: 
    //        { "Content-Type": "application/json" },
    //        body: JSON.stringify(
    //          {
              
    //           name: formData.name,
    //           dob: formData.dob,
    //           dos: formData.dos,
    //           ins: formData.ins,
    //           doctor_id: formData.doctor_id
    
             
    //         }
    //        )
    //      })
    //      .then(r=> r.json())
    //      .then(data=> setPatientPostData([...patientPostData,data]))
    
    //    }
      //  console.log(patientPostData)
  return (
    <BrowserRouter>

  <div>
    <h2>{doctorList}</h2>
    
    {/* <Route exact path="/patients"><DrArray patientData={patientData}/></Route> */}
    
    </div>
    </BrowserRouter>
  )
}
