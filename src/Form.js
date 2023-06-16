import React from "react"
import { useState } from "react"
function Form (){
    const[name,setName]= useState("")  
    const[dob,setDob]=useState("")
    const[dos,setDos]=useState("")
    const[days,setDays]=useState(0)
    const[weeks,setWeeks]=useState(0)
    const[months,setMonths]=useState(0)
    const[xray,setXray]=useState("")
    const[us,setUs]=useState("")
    const[enfd,setEnfd]=useState(false)
    const [segm,setSegm]=useState(false)
    const [note,setNote]=useState("")
    console.log(name)
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <input required type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      </div>
      <div>
        <label>DOB</label>
        <input required type="date" name="dob" value={dob} onChange={e => setDob(e.target.value)}/>
      </div>
      <div>
        <label>DOS</label>
        <input type="date" name="dos" value={dos} onChange={e => setDos(e.target.value)}/>
      </div>
            {/* <input type="text" >Name</input>
            <input type="date">DOB</input>
            <input type="date">DOS</input> */}


        </form>
    </div>)
}

export default Form