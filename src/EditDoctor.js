import React from "react"
import { useState } from "react"
function EditDoctor({handleDrPatch}){
    const[name,setName] = useState("")
    const [specialty,setSpecialty]= useState("")
    let formData = {name:name,
                    specialty:specialty}

    function handleSubmit(e){
        e.preventDefault()
        
        handleDrPatch(formData)

    }

    return(
        <form onSubmit={handleSubmit}>
            <lable for="name">Change Name</lable>
            <input type="text" name="name" value={name} onChange={e=> setName(e.target.value) }/>
            <lable for="specialty"> Change Specialty</lable>
            <input type="text" name="specialty" value={specialty} onChange={e=> setSpecialty(e.target.value) }/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditDoctor