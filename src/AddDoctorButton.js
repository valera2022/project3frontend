import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function AddDoctorButton() {
    let history = useNavigate()
    function handleClick(e){
      e.preventDefault()
        history.push('/addDr')

    }
  return (
    <div><button onSubmit={handleClick}>Add a Doctor</button></div>
  )
}
