import React from 'react'
import { Link } from 'react-router-dom'
export default function DoctorLink({doctor}) {
  console.log(doctor.id)
  
    // let doctorName = doctor.map((doctor)=>{
    //     return doctor.name

    // }) 
    // let doctorId = doctor.map((doctor)=>{
    //     return doctor.id

    // }) 

    
    console.log(doctor)
  return (
    <Link to={`/doctors/${doctor.id}`}>
    <div>Dr.{doctor.name}</div>
    </Link>
  )
}
