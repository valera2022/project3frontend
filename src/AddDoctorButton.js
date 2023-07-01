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
      <button >Add Doctor</button>
    </Link>
  )
}
