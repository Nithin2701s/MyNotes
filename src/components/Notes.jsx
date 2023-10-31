import React,{ useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
   
    const {notes,getAllNotes} = useContext(noteContext);
    useEffect(() => {
      getAllNotes()   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
   

    
  return (
    <>
    <AddNote/>


    <div className='row my-3'>
      <h2>Your Notes</h2> 
       
       {notes.map(note=>{
       return <NoteItem  key={note._id} note={note}/>
       })}
       </div>
       </>
  )
}



export default Notes