import React from 'react'

const Footer = () => {
  return (
  <footer class="bg-dark text-white py-4">
  <div class="container">
    <div class="row">
 
      <div class="col-md-4">
        <h5>About Sea Exploration</h5>
        <p>We are dedicated to educating and raising awareness about ocean ecosystems and marine life. Join us on our journey beneath the waves.</p>
      </div>


      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#learn-more" class="text-white">Learn More</a></li>
          <li><a href="#gallery" class="text-white">Gallery</a></li>
          <li><a href="#contact" class="text-white">Contact Us</a></li>
        </ul>
      </div>


      <div class="col-md-4 text-center">
        <h5>Follow Us</h5>
        <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
        <a href="#" class="text-white"><i class="bi bi-youtube"></i></a>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col text-center">
        <p>&copy; 2024 Sea Exploration Project. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer