import React, { useState } from "react";
import noteContext from "./noteContext";
import Alert from "../../components/Alert";
const NoteState = (props) => {
  const notesInitial = [];
  const host = "http://localhost:4000";
  const [Notes, setNotes] = useState(notesInitial);
 

    // Get all notes
   const getAllNotes = async() => {
    // API call
 const res =await fetch(`${host}/api/notes/getallnotes`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZTkwYjY3NDUxOTRkMTBlMTAyYjk3In0sImlhdCI6MTY5ODU5OTEyMX0.TrtZnB2iFN7kL2j-7eES0rHh46OxGKE0K-fgpPE1Zw8",
  },
})
  const response=await res.json();
  setNotes(response)
};


  //  Add a note
  const addNote = async(title, description, tag) => {
      // API call
   const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZTkwYjY3NDUxOTRkMTBlMTAyYjk3In0sImlhdCI6MTY5ODU5OTEyMX0.TrtZnB2iFN7kL2j-7eES0rHh46OxGKE0K-fgpPE1Zw8",
    },
    body: JSON.stringify({ title, description, tag }),
  });
   const res = await response.json()
    const note =res.savedNote;
    setNotes(Notes.concat(note));
  };
  // delete a note
  const deleteNote = async(id) => {
    // API call
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZTkwYjY3NDUxOTRkMTBlMTAyYjk3In0sImlhdCI6MTY5ODU5OTEyMX0.TrtZnB2iFN7kL2j-7eES0rHh46OxGKE0K-fgpPE1Zw8",
      }
    }).then(()=>{
      <Alert message='deleted note' />
    });
    const newnotes = Notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZTkwYjY3NDUxOTRkMTBlMTAyYjk3In0sImlhdCI6MTY5ODU5OTEyMX0.TrtZnB2iFN7kL2j-7eES0rHh46OxGKE0K-fgpPE1Zw8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
  
    // Logic to edit in client
    let newNotes=JSON.parse(JSON.stringify(Notes))
    for (let index = 0; index < Notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };
  return (
    <noteContext.Provider
      value={{ notes: Notes,getAllNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
