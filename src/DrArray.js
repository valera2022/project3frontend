import Patient from "./Patient";
import React from "react";
function DrArray({doctorData}){
    let u = doctorData.map(dc => dc.patients)
    console.log(u)
   
    let ptList = doctorData.map(dc => {if (dc.patients <= dc.patients.length){
   return  dc.patients
//    <Patient key={dc.id} pts={dc.patients}/>
}
})
    // console.log(patientData)
console.log(ptList)
   
       
   
//    console.log(ptList)
    return(
        <div>
            <h1>PT SUBMITED</h1>
         <ul>{ptList}</ul>
        
         </div>
        

    ) 
    
    
   



}




export default DrArray