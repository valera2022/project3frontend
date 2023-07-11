import React from 'react'

import { Link } from 'react-router-dom'

export default function AddDoctorButton() {
    
  
  return (
    <Link to="/doctors/new">
      {/* <span class="material-symbols-outlined">Add</span>  */}

      <button  type="button" className="btn btn-success" >+ Add doctor</button>
    </Link>
  )
}
