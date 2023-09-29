import React, { useState } from 'react'
import noteContext from './noteContext'
const NoteState = (props) => {
   const notesInitial = [
    {
      "_id": "6511be1b1ffebeaf55d69550",
      "user": "65106d80df849ee601c10676",
      "title": "Find peace",
      "description": "Last thing to achieve in life",
      "tag": "general",
      "timestamp": "1695661532748",
      "__v": 0
    },
    {
      "_id": "6512594464247b4462004453",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons",
      "tag": "personal",
      "timestamp": "1695701254534",
      "__v": 0
    },
    {
      "_id": "6511be1b1ffebeaf55d69550",
      "user": "65106d80df849ee601c10676",
      "title": "Find peace",
      "description": "Last thing to achieve in life",
      "tag": "general",
      "timestamp": "1695661532748",
      "__v": 0
    },
    {
      "_id": "6512594464247b4462004453",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons",
      "tag": "personal",
      "timestamp": "1695701254534",
      "__v": 0
    },
    {
      "_id": "6511be1b1ffebeaf55d69550",
      "user": "65106d80df849ee601c10676",
      "title": "Find peace",
      "description": "Last thing to achieve in life",
      "tag": "general",
      "timestamp": "1695661532748",
      "__v": 0
    },
    {
      "_id": "6512594464247b4462004453",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons",
      "tag": "personal",
      "timestamp": "1695701254534",
      "__v": 0
    }
  ]
   const [Notes, setNotes] = useState(notesInitial);
   
    return (
    <noteContext.Provider value={{notes:Notes,setNotes}}>
            {props.children}
        </noteContext.Provider> 
      )
}

export default NoteState;