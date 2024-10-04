import React from 'react'

const AboutUs = () => {
  return (
    <section id="about-us" class="section bg-#3A6D8C text-white py-5">
    <div class="container">
      <h2 class="text-center">About Our Sea Environment Project</h2>
      <p class="text-center lead mb-5">Our mission is to raise awareness about ocean ecosystems, marine life, and the importance of conserving the deep sea. Dive in with us as we explore the mysteries of the ocean!</p>
      
  
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card bg-light text-dark">
            <div class="card-body">
              <h5 class="card-title">Conserving Marine Life</h5>
              <p class="card-text">We aim to protect marine biodiversity by raising awareness of the threats facing the ocean and fostering a sense of responsibility toward marine conservation.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-light text-dark">
            <div class="card-body">
              <h5 class="card-title">Exploring Deep-Sea Ecosystems</h5>
              <p class="card-text">Our project focuses on studying hydrothermal vents, chemosynthesis, and the incredible life forms that thrive in extreme ocean environments.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-light text-dark">
            <div class="card-body">
              <h5 class="card-title">Promoting Sustainability</h5>
              <p class="card-text">We encourage sustainable practices in ocean exploration and management to ensure the long-term health of marine ecosystems for future generations.</p>
            </div>
          </div>
        </div>
      </div>
      
     
      <div class="row text-center mb-5">
        <h3 class="mb-4">Meet Our Team</h3>
        
        <div class="col-md-4">
         <div className="nafis-img">

         </div>
          <h5>Nafis Forkan</h5>
          <p>Unity Developer</p>
        </div>

        <div class="col-md-4 col-md">
          <div className="albid-img">
          
         </div>
          <h5>Albid Nawar</h5>
          <p>Team Leader</p>
        </div>

        <div class="col-md-4">
        <div className="shuvo-img">
          
          </div>
          <h5>Shuvo Roy</h5>
          <p>Frontend Developer</p>
        </div>

        <div class="col-md-4">
         <div className="mush-img">
          
         </div>
          <h5>Mustasin Ahmed</h5>
          <p>Backend Developer</p>
        </div>


        <div class="col-md-4">
          <div className="borhan-img">
          
         </div>
          <h5>Borhan Uddin Siyam</h5>
          <p>UI/UX Designer</p>
        </div>

        <div class="col-md-4">
          <div className="mili-img">
          
         </div>
          <h5>Rukshana Akter Mili</h5>
          <p>Researcher</p>
        </div>
        
      </div>
      
     
      <div class="text-center">
        <a href="#more-info" class="btn btn-primary btn-lg">Learn More About the Project</a>
      </div>
    </div>
  </section>
  )
}

export default AboutUs