import Patient from "./Patient";
import React from "react";
import AddDoctorButton from "./AddDoctorButton";
function PtArray({doctorData}){
    let u = doctorData.map(dc => dc.patients)
    console.log(u)
   

    return(
        <div>
            <h1>PT SUBMITED</h1>
           
            <ul>{ u.map((dc) => dc.map(e=> <Patient pt ={e}/> ))}</ul>
            
            <p><AddDoctorButton/></p>
        
         </div>
        

    ) 
    
    
   



}




export default PtArray