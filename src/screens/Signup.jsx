import React, { useState } from 'react'
import axios from "axios"
import { API_BASE_URL } from '../config/Constant';
import { useNavigate } from 'react-router-dom';

function Signup(event) {

    const navigate=useNavigate();
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loader,setLoader]=useState(false);

    
    function alertFunction(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        var alertPlaceholder = document.getElementById('alertMsg')
    
        alertPlaceholder.append(wrapper)
      }

    const signup= ()=>{
        event.preventDefault();
        setLoader(true);

        const config={
            headers:{
                "content-type":"application/json"
            }
         }
         const reqData={
            name:fname+" "+lname,
            phone:phone,
            email :email,
            password:password,
         }
       
         axios.post(`${API_BASE_URL}/users`,reqData,config)
        .then((response)=>{
            alertFunction("Registration Done Successfully , Please Proced to Login ",'success');
            setFname("");
            setLname("");
            setEmail("");
            setPhone("");
            setPassword("");



            console.log(response);

        })
        .catch((err)=>{
            alertFunction("Some Error occured!",'danger');
            console.log(err)
        })
    }

  return (
    <div className='container  '>
    <h3 className='py-3 text-center text-uppercase' >Create an account</h3>
    <div id='alertMsg'></div>
    <div className="contact-form-container mx-auto text-muted shadow-sm rounded p-3 lh-2">  
    <form onSubmit={(ev)=>{Signup(ev)}}>
  <div className="mb-3">
    <label htmlFor="Firstname" className="form-label">Firstname</label>
    <input value={fname} type="text" onChange={(e)=>setFname(e.target.value)} className="form-control" id="Firstname" required aria-describedby="Firstname"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Lastname" className="form-label">Lastname</label>
    <input value={lname} type="text" onChange={(e)=>setLname(e.target.value)} className="form-control" id="Lastname" required aria-describedby="Lastname"/>
  </div>
    <div className="mb-3">
    <label htmlFor="phone" className="form-label">Contact No.</label>
    <input value={phone} type="phone" onChange={(e)=>setPhone(e.target.value)} className="form-control" id="phone"  aria-describedby="phone"/>
    <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
  </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input value={email} type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="email" required aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input value={password} type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="password" required aria-describedby="password"/>
  </div>
<div className='d-grid'>
<button type="submit" className="btn btn-primary">Signup</button>

</div>
</form>
</div>
    </div>
  )
}

export default Signup