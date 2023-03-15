
import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><p>TodoList</p></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p>Home</p></a>
        </li><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><p>About</p></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar