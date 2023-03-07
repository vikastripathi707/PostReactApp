import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white ' style={{minHeight:"12rem"}}>
        <div className="row p-4 text-center ">
     {   /* Defines 3 col for large section and medium and 1 col for small devices  */}
        <div className='col-lg-4 col-md-4 col-sm-12 mb-2 ' >
        <h5>Quick Links</h5>
        <div className='d-flex flex-column align-item-evenly' >
        <a className='text-white text-decoration-none p-1' href="#">About us</a>
        <a className='text-white text-decoration-none p-1' href="#">Our Posts</a>
        <a className='text-white text-decoration-none p-1' href="#">Our Team</a>
        <a  className='text-white text-decoration-none p-1' href="#">Contact us</a>
    
        </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 mb-2 ' >
        <h5>News Letter</h5>
        <div style={{minHeight:"8rem"}} className='d-flex flex-column justify-content-around' >
        <input type="text" className='form-control' placeholder='subscribe to the newsletter' />
        <button className='btn btn-warning text-danger ' >Subscribe</button>
        
        </div>
        
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 mb-2' >
        <h5>Contact details</h5>
        <div className='d-flex flex-column'>
        <p><i className="px-1 fa-sharp fa-solid fa-location-dot"></i> 26 Huston Street</p>
        <p>Newton City</p>
        <p>Uttar Pradesh -221211</p>
        <p><i className="px-1 fa-solid fa-phone-volume"></i> +91-1234567190</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer