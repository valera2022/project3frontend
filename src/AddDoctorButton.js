import React from 'react'
import { Link } from 'react-router-dom'

export default function AddDoctorButton() {
    
  
  return (
    <Link to="/doctors/new">
    

      <button  type="button" className="btn btn-success" >+ Add doctor</button>
    </Link>
  )
}
