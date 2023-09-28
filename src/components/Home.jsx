import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
const Home = () => {
  const a = useContext(noteContext);
  return (
    <div><h1>This is {a.Student.name}'s notes</h1></div>
  )
}

export default Home