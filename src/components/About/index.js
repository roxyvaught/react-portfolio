import React from 'react';

function About() {
  return(
  <section className="title">
    <h1 class="name">Roxanna Vaught-Mijares</h1>
    <hr></hr>
    
    <div className="row justify-content-center">
      <div className="col-10" id="about-section">
          <img class="mb-5" src="../../assets/images/roxanna.JPG" alt="Roxanna Vaught Photo"/>
      <p>
      I am a geologist and web developer in training with a diverse background in oil and gas. I graduated with my Bachelor's Degree in 2015 and obtained my Master's Degree in 2018, both in geology. During that time, I have been lucky enough to work with the US Bureau of Land Management, TGS-NOPEC, and in the Permian Basin as a Wireline Field Engineer for Schlumberger. Now, I am on the hunt to learn a new skill set while looking for my next adventure!
      </p>
     
    <p>
          View full <a href="#/resume" class="link">resume</a>
  </p>
    </div>  
    </div>
  </section> 
)}

export default About;