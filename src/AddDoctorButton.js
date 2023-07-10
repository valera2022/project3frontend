import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddDoctorButton() {
    let history = useNavigate()
    // function handleClick(e){
    //   e.preventDefault()
    //     history.push('/addDr')
   
    // }
  return (
    <Link to="/addDr">
      {/* <span class="material-symbols-outlined">Add</span>  */}

      <button  type="button" className="btn btn-success" >+ Add doctor</button>
    </Link>
  )
}
