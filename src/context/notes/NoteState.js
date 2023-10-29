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
    },
    {
      "_id": "6511be1b1ffebeaf55d69552",
      "user": "65106d80df849ee601c10676",
      "title": "Find peace",
      "description": "Last thing to achieve in life",
      "tag": "general",
      "timestamp": "1695661532748",
      "__v": 0
    },
    {
      "_id": "6512594464247b44620044534",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons",
      "tag": "personal",
      "timestamp": "1695701254534",
    },
    {
      "_id": "6511be1b2ffebeaf55d69550",
      "user": "65106d80df849ee601c10676",
      "title": "Find peace",
      "description": "Last thing to achieve in life",
      "tag": "general",
      "timestamp": "1695661532748",
      "__v": 0
    },
    {
      "_id": "651259446424764462004453",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons",
      "tag": "personal",
      "timestamp": "1695701254534",
    }
  ]
   const [Notes, setNotes] = useState(notesInitial);
  
   //  Add a note
   const addNote =()=>{
   const note= {
      "_id": "651259446524964462004453",
      "user": "65106d80df849ee601c10676",
      "title": "Gone girl",
      "description": "A deep love between two mad persons [ADDED]",
      "tag": "personal",
      "timestamp": "1695701254534",
   }
   setNotes(Notes.push(note))
   }
  // delete a note
  const deleteNote =()=>{

  }
  // Edit a note
  const editNote =()=>{

  }
    return (
    <noteContext.Provider value={{notes:Notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider> 
      )
}

export default NoteState;