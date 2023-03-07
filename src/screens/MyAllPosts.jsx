import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import { API_BASE_URL } from '../config/Constant';
import { UserContext } from '../App';





function MyAllPosts() {
    const navigate=useNavigate();
    const [posts,setPosts]=useState([]);
    const [loader,setLoader]=useState(false);
    const {state,dispatch}=useContext(UserContext);


    const getAllPosts= async()=>{
      if(state){

    console.log(state);
        setLoader(true);
    fetch(`${API_BASE_URL}/posts?userId=${state.user.id}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        setPosts(json);
        setLoader(false);

        });
        
      }

    }

    useEffect(()=>{
        // console.log("all posts loded")
        getAllPosts();
        
    },[]);

    function alertFunction(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      var alertPlaceholder = document.getElementById('alertMsg')
  
      alertPlaceholder.append(wrapper)
    }
    

    const deletePost=(postId)=>{

      let action =window.confirm("Are you sure want to delete?");
      if(action){

        axios.delete(`${API_BASE_URL}/posts/${postId}`)
        .then((response)=>{
          console.log(response);
          alertFunction(`Post With Id ${postId} has been  Deleted successfully`,'success');
          navigate('/myallposts')// to refresh navigate to posts
          
        })
        .catch((err)=>{
          console.log(err)
          alertFunction(`Unable to Delete Post with Id ${postId}`,'danger');
          
        })
      }
    

    }
  return (
    <div>
    <section className='featured-posts container pt-2 '>
    <h3 className='py-4 text-center text-uppercase' >My All Posts</h3>
    <div id='alertMsg'></div>
    <div className="row">
{  
    loader ? 
    // loader
    <div className='col-12 text-center'>
    <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    
   : posts.map((post,index)=>{
   return  <div key={index} className='col-lg-4 col-mg-4 col-sm-12 mb-3'>
    <div className="card" >
    <img style={{height:"280px"}} src="https://source.unsplash.com/random/400*400/?city,night" className="card-img-top" alt={post.title}/>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      <div className="d-flex justify-content-between">
        <Link to={`/posts/${post.id}/${post.userId}`} className="btn btn-primary text-uppercase "><i className="fa-sharp fa-solid fa-mountain-sun me-1"></i> Details</Link>
        <Link to={`/create/${post.id}/${post.userId}`} className="btn btn-warning text-uppercase  "><i className="fa-solid fa-pen-to-square me-1"></i> Edit</Link>
        <button onClick={()=>{deletePost(post.id)}} className="btn btn-danger text-uppercase "> <i className="fa-solid fa-trash me-1"></i> Delete</button>
      </div>
    </div>
    </div>
    </div>})
}
    </div>
    </section>
    </div>
  )
}

export default MyAllPosts