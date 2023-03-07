import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { useState ,useEffect} from 'react';
import { API_BASE_URL } from '../config/Constant';
import "./PostDetail.css"

function PostDetail() {
  const navigate=useNavigate()
    const [title ,setTitle]=useState();
    const [body ,setBody]=useState();

    const [name ,setName]=useState();
    const [email ,setEmail]=useState();
    const [phone ,setPhone]=useState();
    const [website ,setWebsite]=useState();
    const {postId,userId}=useParams();

    const getPostAndUser= async()=>{
      axios.get(`${API_BASE_URL}/posts/${postId}`)
      .then((postResp)=>{

        const {id,title,body}=postResp.data;
        setTitle(title);
        setBody(body);
        axios.get(`${API_BASE_URL}/users/${userId}`)

      .then((userResp)=>{
        const {name,email,phone,website}=userResp.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setWebsite(website);
        // debugger;
      })
      .catch((err)=>{
        console.log(err)
      })
      })
      .catch((err)=>{
        console.log(err)
      })

    }
    useEffect(()=>{
      // console.log("all posts loded")
      getPostAndUser();
      
  },[]);


  return (
    <div className='container'>
    <div className="row">
    <div className="col-12">
    <h3 className='py-3 text-center text-uppercase' >Post Detail</h3>
    </div>    
    </div>
    <div className="row m-3">
    <div className="col-md-9 col-lg-9 col-sm-12  ">
    <div className="card mb-3">
  <img src="https://source.unsplash.com/random/400*400/?city,night" className="card-img-top card-img-height" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {body} </p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>

    </div>    
    <div className="col-md-3 col-lg-3 col-sm-12 ">
    <div className="card " >
    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top info-card-img-height" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">User Information</h5>
      <p className="card-text">{name}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <a  href={`mailto:${email}`} > {email}</a>
      </li>
      <li className="list-group-item">
      <a  href={`tel:${phone}`} > {phone}</a>
      </li>
      <li className="list-group-item">
      <a href={`www.${website}`}  >Visit our Website</a>
      </li>
      <li className="list-group-item">
      <div className='d-block'>
      <button onClick={()=>{navigate(-1)}} className='btn btn-primary w-100 text-uppercase'>Back</button>
      
      </div>
      </li>
    </ul>
    {/*<div className="card-body">
    <a href="#"  target="_blank" className="card-link">Website</a>
    <a href="#" className="card-link">Another link</a>
  </div>*/}
  </div>
    </div>    
    </div>    
    </div>
  )
}

export default PostDetail