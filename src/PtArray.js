import Patient from "./Patient";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PtArray({doctorData,setDrParam}){
    let params= useParams()
    console.log(params)
    if(params){setDrParam(params.id)}
    let u = doctorData.filter(doc=> doc.id == params.id).map(dc => dc.patients)
    console.log(u)
   
    
    return(
        <div>
            <h1>PT SUBMITED</h1>
           
            <ul>{ u.map((dc) => dc.map(e=> <Patient pt ={e}/> ))}</ul>
            <Link to={`/doctors/${params.id}/patients/new`}>
                   <button type="button" class="btn btn-outline-success btn-sm">Add PT</button>
            </Link>
           
        
         </div>
        

    ) 
    
    
   



}




export default PtArray