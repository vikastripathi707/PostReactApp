import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='container  '>
    <h3 className='py-3 text-center text-uppercase' >Contact us</h3>
    <div className="contact-form-container mx-auto text-muted shadow-sm rounded p-3 lh-2">  
    <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="name" required aria-describedby="emailHelp"/>
  </div>
    <div className="mb-3">
    <label htmlFor="phone" className="form-label">Contact No.</label>
    <input type="phone" className="form-control" id="phone"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
  </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" required aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
 {/* <div className="mb-3 form-check">
  <label className="form-label" for="query">Your Query</label>
  <textarea className="form-control" id="query"></textarea>
  </div>*/}
  <div className="mb-3">
  <label htmlFor="timeing" className="form-label">When can we reach you </label>
  <select className="form-select " id='timeing' aria-label="Default select example">
  <option defaultValue="">Best time to reach</option>
  <option value="M">Morning</option>
  <option value="A">Afternoon</option>
  <option value="E">Evening</option>
</select>
</div>
<div className="mb-3">
<label htmlFor="query" className="form-label" required>Describe your Query below</label>
<textArea className="form-control" id="query"/ >
</div>
<div className='d-grid'>
<button type="submit" className="btn btn-primary">Submit</button>

</div>
</form>
</div>
    </div>
  )
}

export default Contact