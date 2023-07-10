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
   
    //  let filtered = u.filter(e => e.id == params.id)
    //  console.log(filtered)
    return(
        <div>
            <h1>PT SUBMITED</h1>
           
            <ul>{ u.map((dc) => dc.map(e=> <Patient pt ={e}/> ))}</ul>
            <Link to={`/addPt/${params.id}`}>
                   <button type="button" class="btn btn-outline-success btn-sm">Add PT</button>
            </Link>
           
        
         </div>
        

    ) 
    
    
   



}




export default PtArray