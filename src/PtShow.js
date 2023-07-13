import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function PtShow({ doctorData, handlePatch }) {

  const [days, setDays] = useState("")
  const [weeks, setWeeks] = useState("")
  const [months, setMonths] = useState("")
  const [xray, setXray] = useState("xray req")
  const [us, setUs] = useState("")
  const [enfd, setEnfd] = useState(false)
  const [segm, setSegm] = useState(false)
  const [note, setNote] = useState("")

  const params = useParams()

  let studiesData = {
    days,
    weeks,
    months,
    xray,
    us,
    enfd,
    segm,
    note

  }



  function handleSubmit(e) {
    e.preventDefault()
    handlePatch(studiesData, params.id)

  }

  console.log(enfd)
  console.log(xray)
  console.log(note)
  console.log(us)




  return (
    doctorData.map((doctor) => doctor.patients.filter(pts => pts.id === parseInt(params.id, 10)).map(u => {
      return (
        <div>
          <p>{"Name: " + u.name} || {"DOB: " + u.dob} || {"DOS: " + u.dos}</p>
          <br></br>

          <form onSubmit={handleSubmit}>
            <div>
              <h2>Follow up</h2>
              <label>Days</label>
              <input type="text" name="days" value={days} onChange={e => setDays(e.target.value)} />
            </div>

            <div>
              <label>Weeks</label>
              <input type="text" name="weeks" value={weeks} onChange={e => setWeeks(e.target.value)} />
            </div>

            <div>
              <label>Months</label>
              <input type="text" name="months" value={months} onChange={e => setMonths(e.target.value)} />
            </div>

            {/* Xrays options */}
            <div>
              <h2>XRAY/US</h2>
              <label for="xrays">Xrays :</label>
              <select name="xrays" value={xray} id="xrays" onChange={e => setXray(e.target.value)} >
                {/* foot group */}
                <optgroup label="Foot">
                  <option value="None">None</option>
                  <option value="Right foot">Right </option>
                  <option value="Left foot">Left </option>
                  <option value="B/L foot">B/L </option>
                </optgroup>
                {/* ankle group */}
                <optgroup label="Ankle">

                  <option value="Right ankle"> ankle</option>
                  <option value="Left ankle"> ankle</option>
                  <option value="B/L ankle">B/L </option>
                </optgroup>
              </select>
            </div>
            {/* ULtrasounds options */}
            <div>
              <label for="u/s">ULtrasounds :</label>
              <select name="u/s" value={us} id="u/s" onChange={e => setUs(e.target.value)}>
                <optgroup label="P.Fascia">
                  <option value="None">None</option>
                  <option value="Right p.fascia"> Right</option>
                  <option value="Left p.fascia "> Left</option>
                  <option value="B/L p.fascia"> B/L</option>

                </optgroup>
                <optgroup label="Ltl ankle">
                  <option value="Right ltl-ankle"> Right</option>
                  <option value="Left ltl-ankle"> Left</option>
                  <option value="B/L ltl-ankle"> B/L</option>

                </optgroup>
                <optgroup label="Achilles">
                  <option value=" Right achilles"> Right</option>
                  <option value=" Left achilles"> Left</option>
                  <option value="B/L achilles">B/L</option>

                </optgroup>
                <optgroup label="MDL Ankle">
                  <option value="Right MDL-Ankle "> Right</option>
                  <option value="Left MDL-Ankle"> Left</option>
                  <option value="B/L MDL-Ankle ">B/L </option>

                </optgroup>

                <optgroup label="Forefoot">
                  <option value="Right Forefoot">Right</option>
                  <option value="Left Forefoot ">Left</option>
                  <option value="B/L Forefoot ">B/L</option>

                </optgroup>

                <optgroup label="Dorsal FF">
                  <option value="Right Dorsal FF ">Right</option>
                  <option value="Left Dorsal FF">Left</option>
                  <option value="B/L Dorsal FF">B/L</option>

                </optgroup>
              </select>
              <br></br>

            </div>
            <div>
              <h2>ENFD/SEGM</h2>
              <label for="enfd">Enfd</label>
              <input id="enfd" checked={enfd} onChange={(e) => setEnfd(e.target.checked)} type="checkbox" />
              <label for="segm">segm</label>
              <input id="segm" checked={segm} onChange={(e) => setSegm(e.target.checked)} type="checkbox" />
            </div>
            <br></br>

            <div>
              <h2>Note</h2>

              <input type="text" name="note" value={note} onChange={e => setNote(e.target.value)} />
            </div>

            <button type="submit">Submit</button>



          </form>

        </div>)
    }))



  )







}
