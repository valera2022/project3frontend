import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function DoctorLink({doctor,handleDeleteDr,setSingleDr}) {
 
  //handleEditDrdefault is used to have default values on edit from and get dr id in edit form
  let navigate = useNavigate()
  console.log(doctor.id)
  //provides Id for mt dr patch
  function handleClickEdit(e){
  e.preventDefault()
        console.log(doctor.id)
       
        setSingleDr(doctor)
     

      navigate(`/doctors/${doctor.id}/edit`)
     
  }

  function handleClickDelete(){
       handleDeleteDr(doctor.id)
      // handleDrId(doctor.id)

     
  }
  

    
    console.log(doctor)
  return (
   <div className='drdiv'>
    <br></br>
      <Link style ={{textDecoration:"none"}}to={`/doctors/${doctor.id}`}>
       <div style={{color:"whitesmoke"}}   ><p className='dlist'>Dr. { doctor.name}</p> </div>
     </Link>
    
      <button onClick={handleClickEdit} type="button" class="btn btn-outline-success btn-sm" >Edit</button>
      |
      <button onClick={handleClickDelete} type="button" class="btn btn-outline-danger btn-sm">Delete</button>
      {/* <DeleteDoctor handleOnDoctorDelete={handleOnDoctorDelete} /> */}
      {/* <button onClick={handleDelete}>Delete</button> */}
      
    </div>
  )
}
