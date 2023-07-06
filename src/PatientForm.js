import React from "react"
import { useState } from "react"
import DrArray from "./PtArray"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
function PatientForm ({handlePostPt,doctorData,drId}){
    const[name,setName]= useState("")  
    const[dob,setDob]=useState("")
    const[dos,setDos]=useState("")
    const[ins,setIns]=useState("")
    let params = useParams()
    console.log(params)
   let doctor_id = doctorData.map(doctor=> {
    return doctor.id
   })
  // let doctorId = doctorData.id
   console.log(doctor_id)
    // let history = useHistory()
    console.log(doctorData)
   
    function handleSubmit(e){
        e.preventDefault()
        let formData = {
         name: name,
          dob: dob,
          dos:dos,
          ins: ins,
          doctor_id: parseInt(params.id,10)}//put params from url
          handlePostPt(formData)
       

        // history.push("/patients")
        

        
        // let formData = [name,dob,dos,ins]
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
        <input required type="date" name="dob" value={dob} onChange={e => setDob(e.target.value)}/>
      </div>
      <br></br>
      <div>
        <label>DOS</label>
        <input type="date" name="dos" value={dos} onChange={e => setDos(e.target.value)}/>
      </div>
      <br></br>
      <div>
        <label>Ins</label>
        <input type="text" name="ins" value={ins} onChange={e => setIns(e.target.value)}/>
      </div>
      <br></br>
      <button type ="submit">Submit</button>
      {/* <div>
        <label>Days</label>
        <input type="text" name="days" value={days} onChange={e => setDays(e.target.value)}/>
      </div>
      <div>
        <label>Weeks</label>
        <input type="text" name="weeks" value={weeks} onChange={e => setWeeks(e.target.value)}/>
      </div>
      <div>
        <label>Months</label>
        <input type="text" name="months" value={months} onChange={e => setMonths(e.target.value)}/>
      </div> */}
      


        </form>
       
    </div>)
}

export default PatientForm