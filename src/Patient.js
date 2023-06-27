
import React from 'react'
import { Link } from 'react-router-dom'

 function Patient({pts}) {
  console.log(pts)

    let ptName =  pts.map((p) => p.name )
    let ptId =  pts.map((p) => p.id )

  //  console.log(pt.name)
    
    
   
    // console.log(pt)
   
   
  return (
    <Link to={`/patients/${ptId}`}>
         
    <div >{ptName}</div >
     </Link>
   )
}


export default Patient