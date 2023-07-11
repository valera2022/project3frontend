import React from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function EditDoctor({ handleDrPatch, singleDr }) {
    let navigate = useNavigate()
    const [name, setName] = useState(singleDr.name)
    const [specialty, setSpecialty] = useState(singleDr.specialty)
    let formData = {
        name: name,
        specialty: specialty,
        id : singleDr.id
    }

    function handleSubmit(e) {
        e.preventDefault()

        handleDrPatch(formData)
        navigate("/doctors")
       

    }

    return (
        <div  className="editform">
            <form onSubmit={handleSubmit}  >
                <lable for="name" className="label" style={{color:"whitesmoke" }} >Change Name</lable>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <lable for="specialty" className="label" style={{color:"whitesmoke" }}> Change Specialty</lable>
                <input type="text" name="specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} />
                <br></br>
                <button type="submit"  class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default EditDoctor