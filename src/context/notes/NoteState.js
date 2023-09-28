import React, { useState } from 'react'
import noteContext from './noteContext'
const NoteState = (props) => {
  const [Student, setStudent] = useState({
    name:"Nithin",
    class:"7c"
  })
  const update =()=>{ 
    setTimeout(()=>{
        setStudent({
          name:"Naveen",
          class:"6b"
        })
      },7000)
    }
    return (
    <noteContext.Provider value={{Student,update}}>
            {props.children}
        </noteContext.Provider> 
      )
}

export default NoteState;