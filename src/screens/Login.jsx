import React, { useContext, useState } from 'react'
import axios from "axios"
import { API_BASE_URL } from '../config/Constant';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {
  const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {state,dispatch}=useContext(UserContext);
    const login= (e)=>{
      e.preventDefault();
      // setLoader(true);

      const config={
          headers:{
              "content-type":"application/json"
          }
       }
       const reqData={
          email :email,
          password:password,
       }
     
       axios.post(`${API_BASE_URL}/users`,reqData,config)
      .then((response)=>{
          // alertFunction("Registration Done Successfully , Please Proced to Login ",'success');

          // find authenticated user details of api
        const userId=1;// hard coded value of user
          fetch(`${API_BASE_URL}/users/${userId}`,)
        .then((response) => response.json())
        .then((json) => {

          // storing the user details in local storage
          localStorage.clear();
          localStorage.setItem("user",JSON.stringify(json));
          localStorage.setItem("token","abcdssnk");

          const token=localStorage.getItem("token");
          
          const user=JSON.parse(localStorage.getItem("user"));
          const userState={'token':token,'user':user};
          const action={type:'LOGIN', payload:userState};
          dispatch(action);
          navigate('/posts');
        
        });



          console.log(response);

      })
      .catch((err)=>{
          // alertFunction("Some Error occured!",'danger');
          console.log(err)
      })
  }


  return (
    <div className='container  '>
    <h3 className='py-3 text-center text-uppercase' >Please Login Below</h3>
    <div className="contact-form-container mx-auto text-muted shadow-sm rounded p-3 lh-2">  
    <form onSubmit={(e)=>{login(e)}}>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="email" required aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="password" required aria-describedby="password"/>
  </div>
<div className='d-grid'>
<button type="submit" className="btn btn-primary">Login</button>

</div>
</form>
</div>
    </div>
  )
}

export default Login