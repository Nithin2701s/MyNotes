import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Login = () => {
    let navigate = useNavigate()
    const [Credentials, setCredentials] = useState({email:'',password:''})

    const onchange = (e)=>{
      setCredentials({...Credentials, [e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const email=document.getElementById('email').value
        const password=document.getElementById('password').value
        const response = await fetch('http://localhost:4000/api/auth/verifyuser',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({email,password})
        })
        const json= await response.json();
       if(json.success){
        localStorage.setItem('token',json.authToken)
        navigate('/')
       }
       else {
        alert('Invalid credentials')
       }
      }
    return (
        <>
            <form className='container-sm' style={{border:'1px solid grey',padding:'15px', borderRadius:'19px'}} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input autoComplete='email' type="email" className="form-control" name='email' value={Credentials.email}  id="email" aria-describedby="emailHelp" onChange={onchange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={Credentials.password} id="password" onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login