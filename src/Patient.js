
import React from 'react'
import { Link } from 'react-router-dom'


 function Patient({pt}) {
  console.log(pt)

    // let ptName =  pt.map((p) => p.name )
    // let ptId =  pts.map((p) => p.id )

  //  console.log(pt.name)
    
    
   
    // console.log(pt)
   
   
  return (
    <Link to={`/patients/${pt.id}`}>
         
    <li >{pt.name}</li>
     </Link>
   )
}


export default Patient