import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div>
    <section className='hero-section '>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    {/*Card section featured posts */}
    </section>
    <section className='featured-posts container pt-2'>
    <h3 className='py-4 text-center text-uppercase' >Featured Posts</h3>
    <div className="row">
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    </div>
    </section>

    <section className='latest-posts container pt-2'>
    <h3 className='py-4 text-center text-uppercase' >Latest Posts</h3>

    <div className="row">
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    <div className='col-lg-4 col-mg-4 col-sm-12'>
    
    <div className="card" >
    <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="d-grid">
        <a href="#" className="btn btn-warning">read more</a>
      </div>
    </div>
    </div>
    
    
    </div>
    </div>
    </section>
    <section className=' d-flex flex-column justify-content-center align-items-center container-fluid bg-primary bg-gradient mt-4' style={{minHeight:"180px"}}>
    <i className="fs-1 text-warning my-3 fa-solid fa-location-dot"></i>
    <h3 className='text-white text-uppercase'>View All wide variety of Posts</h3>
    <button className='btn btn-warning my-2  text-uppercase fw-bold' >View all posts</button>
    </section>
    <section className='out-portfolio  container'>
    <h3 className='py-4 text-center text-uppercase py-4' >Our Portfolio</h3>
    <div className="container">
  <div className="row g-2">
    <div className="col-6">
      <div className="p-1 border bg-light">
    <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80" className="card-img-top" alt="..."/>
      
      </div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light">
    <img src="https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
      
      </div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light">
    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
      
      </div>
    </div>
    <div className="col-6">
      <div className="p-1 border bg-light">
    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" className="card-img-top" alt="..."/>
      
      </div>
    </div>
  </div>
</div>

    </section>
    </div>
  )
}

export default Home