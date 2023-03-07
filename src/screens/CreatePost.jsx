import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../config/Constant';
import {useParams,useNavigate} from "react-router-dom"

function CreatePost() {
  const navigate=useNavigate();
    const [title,setTitle]=useState();
  const [body,setBody]=useState();
    const {postId,userId}=useParams();
    const [loader,setLoader]=useState(false);
    const [isEdit ,setIsEdit]=useState(false);

    const populateData=()=>{
      if(postId){
        setIsEdit(true);
     

        setLoader(true);
  fetch(`${API_BASE_URL}/posts/${postId}`)
.then((response) => response.json())
  .then((json) => {
      console.log(json)
      setTitle(json.title);
      setBody(json.body);
      setLoader(false);

      });
      
      
      }

    }

    const createPost=(event)=>{
        setLoader(true);
        event.preventDefault();
        let methodType="POST";
        let url='posts';
        if(postId){
           methodType="PUT";
           url=`posts/${postId}`
        }
        let reqBody=JSON.stringify({
          title: title,
          body: body,
          userId: 1, //userId
    })
       
        // console.log(event);
        fetch(`${API_BASE_URL}/${url}`, {
        method: `${methodType}`,
        body: reqBody,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
  .then((response) => response.json())
  .then((json) =>{ 
    // debugger;
    setLoader(false);
    console.log(json)
    if(isEdit){
      alertFunction("Post Edited Successfully!",'success');
    }else{
      alertFunction("Post Created Successfully!",'success');
    }


}).catch((err)=>{
    alertFunction("Some Error occured!",'danger');
    console.log(err);
    setLoader(false);
})
    

    }


    function alertFunction(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    var alertPlaceholder = document.getElementById('alertMsg')

    alertPlaceholder.append(wrapper)
  }
  useEffect(()=>{
    populateData();

  },[])

  return (
    <div className='container  '>
    {isEdit? 
      <h3 className='py-3 text-center text-uppercase' >Update Post</h3>
      : <h3 className='py-3 text-center text-uppercase' >Create Post</h3>
    }
   
    <div id='alertMsg'></div>
{

        loader? 
        // loader
        <div className='col-12 text-center'>
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        
       :


    <div className="contact-form-container mx-auto text-muted shadow-sm rounded p-3 lh-2">  
    <form onSubmit={(event)=>{createPost(event)}}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label" required>Post Title</label>
    <input value={title} type="text" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" required aria-describedby="emailHelp"/>
  </div>
<div className="mb-3">
<label htmlFor="description"  className="form-label" required>Post Description</label>
<textarea value={body} onChange={(e)=>{setBody(e.target.value)}} className="form-control" id="description"/ >
</div>
<div className='d-grid'>
{isEdit?
<button type="submit" className="btn btn-primary">Update Post</button>
:
<button type="submit" className="btn btn-primary">Create Post</button>
}
{/*<div className='d-block'>
{
isEdit? 
<button onClick={()=>{navigate(-1)}} className='my-2 btn btn-primary w-100 text-uppercase'>Move Back</button>
:""
}
</div>*/}

</div>
</form>
</div>
}
    </div>
  )
}

export default CreatePost