import React from 'react' 
import DoctorLink from './DoctorLink'
import AddDoctorButton from "./AddDoctorButton";


export default function DoctorNameList({doctorData,handleDeleteDr,handleEditDrdefault}) {
  console.log(doctorData)
 
  const doctorList = doctorData.map((doctor)=><DoctorLink 
   handleDeleteDr={handleDeleteDr} 
   doctor={doctor} 
   handleEditDrdefault={handleEditDrdefault}/>)
  console.log(doctorList)

    
  return (
   

   <div className="doct">
    <h2>{doctorList}</h2>
    <br></br>
    <p><AddDoctorButton/></p>
    
    
   </div>
   
  )
}
