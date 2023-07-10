import React from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
function PatientForm({ handlePostPt, doctorData }) {
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [dos, setDos] = useState("")
  const [ins, setIns] = useState("")

  let params = useParams()
  let navigate = useNavigate()
  console.log(params)


  let doctor_id = doctorData.map(doctor => {
    return doctor.id
  })

  console.log(doctor_id)

  console.log(doctorData)

  function handleSubmit(e) {
    e.preventDefault()
    let formData = {
      name: name,
      dob: dob,
      dos: dos,
      ins: ins,
      doctor_id: parseInt(params.id, 10)
    }//put params from url
    handlePostPt(formData)


    navigate(`/doctors/${params.id}`)




  }

  return (
    <div>
      <h1>ADD PATIENT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input required type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        </div>
        <br></br>
        <div>
          <label for="dob">DOB</label>
          <input required type="date" name="dob" value={dob} onChange={e => setDob(e.target.value)} />
        </div>
        <br></br>
        <div>
          <label>DOS</label>
          <input type="date" name="dos" value={dos} onChange={e => setDos(e.target.value)} />
        </div>
        <br></br>
        <div>
          <label>Ins</label>
          <input type="text" name="ins" value={ins} onChange={e => setIns(e.target.value)} />
        </div>
        <br></br>
        <button type="submit">Submit</button>
       


      </form>

    </div>)
}

export default PatientForm