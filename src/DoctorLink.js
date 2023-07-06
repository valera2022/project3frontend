import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DeleteDoctor from './DeleteDoctor'
export default function DoctorLink({doctor,handleDrId,handleDeleteDr}) {
  let navigate = useNavigate()
  console.log(doctor.id)
  //provides Id for mt dr patch
  function handleSubmit(e){
        e.preventDefault()
        console.log(doctor.id)
        handleDrId(doctor.id)
      navigate("/editDr")
  }
  function handleDeleteId(){
      
      handleDrId(doctor.id)

     
  }
  

    
    console.log(doctor)
  return (<div>
    <Link to={`/doctors/${doctor.id}`}>
     <div><p>Dr.{doctor.name}</p> </div>
    </Link>
    
      <button onClick={handleSubmit}>Edit</button>
      <DeleteDoctor handleDeleteId={handleDeleteId} handleDeleteDr={handleDeleteDr}/>
      {/* <button onClick={handleDelete}>Delete</button> */}
      
    </div>
  )
}
