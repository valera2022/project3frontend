import React from 'react'

export default function DeleteDoctor({handleDeleteDr,handleDeleteId}) {

    function handleSubmit(e){
            e.preventDefault()
            handleDeleteId()
            handleDeleteDr()
          
    }
  return (
    
    <button onClick={handleSubmit}>Delete </button>
    )
}
