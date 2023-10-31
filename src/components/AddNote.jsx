import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext'
const AddNote = () => {
 const context = useContext(noteContext)
 const {addNote} = context
 const [note, setnote] = useState({title:'',description:'',tag:''})
 const onchange =(e)=>{
  setnote({...note ,[e.target.name]:e.target.value})
 }
 const handleClick= (e)=>{
  if(note.title !== '' && note.description !==''){
  addNote(note.title,note.description,note.tag);
  setnote({title:'',description:'',tag:''})
  }
  else {
  alert('Enter valid title and desc')  
  }
  e.preventDefault();
 }
  return (
    <div>
         <h1>Add a note</h1>
      <div className="container my-3">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={5} required onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" name='description' minLength={5} value={note.description} required id="description"  onChange={onchange} />
  </div>
  <div className="mb-3">
  <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" name='tag' id="tag" value={note.tag} onChange={onchange} />
  </div>
  <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary">Add note</button>
</form>
</div>
    </div>
  )
}

export default AddNote