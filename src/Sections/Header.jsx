import React from 'react'

const Header = () => {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-white bg-#EAD8B1">
    <div class="container">
      <a class="navbar-brand" href="#">Abbysal Origin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="#about-us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#learning-outcomes">Learning Outcomes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#signup">Sign Up</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
    </div>
   
  )
}

export default Header;