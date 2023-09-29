import React, { useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
function About() {
  const S1 = useContext(noteContext);
  // useEffect(()=>{
  //   S1.update()
  // },[S1])
  // setTimeout(()=>{
  //   setStudent({
  //     name:"Naveen",
  //     class:"6b"
  //   })
  // },7000)
  return (
    <div><h1>This is about {S1.Student}</h1></div>
  )
}

export default About