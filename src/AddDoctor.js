import React from 'react'
import { useState } from 'react'

export default function AddDoctor() {
    const [name,useName] = useState("")
    const [specialty,setSpecialty] = useState("")
  return (
    <div>
        <h1>Add A Doctor</h1>
        <form>
            <label>Name</label>
            <input type="text" name="name" value={""} />
            <br></br>
            <label>Specialty</label>
            <input type="text" name="specialty" value={""}/>
            <br></br>
            <button type ="submit">Submit</button>
        </form>
    </div>
  )
}
