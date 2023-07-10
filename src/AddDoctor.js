import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function AddDoctor({handlePost}) {
    const [name,setName] = useState("")
    const [specialty,setSpecialty] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        let formData ={
            name:name,
            specialty:specialty
        }
        handlePost(formData)
        toast.success("You just added a Doctor!");

    }
    
  return (
    <div>
        <h1>Add A Doctor</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={i=> setName(i.target.value) } />
            <br></br>
            <label>Specialty</label>
            <input type="text" name="specialty" value={specialty} onChange={i => setSpecialty(i.target.value)}/>
            <br></br>
            <button type ="submit">Submit</button>
        </form>
    </div>
  )
}
