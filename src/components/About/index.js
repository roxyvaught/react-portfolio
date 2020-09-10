import React from 'react';
import profile from '../../assets/images/roxanna.JPG';
import { Container } from 'react-bootstrap';

function About() {
  return(
  <Container fluid>
     <section className="section-title container">
                <h1 className="page-header">Roxanna Vaught-Mijares</h1>
                <hr></hr>
                <div className="row justify-content-center" id="aboutsection">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" id="profile" src={profile} alt="Roxanna Vaught"/>
                        <p id="aboutp">
                        I am a geologist and web developer with a diverse background in oil and gas. I recently obtained my Web Development Certificate from the University of Texas at Austin and I hold Bachelor's and Master's degrees in geology. During graduate school and my time since then, I was lucky enough to work with the US Bureau of Land Management, TGS-NOPEC, and as a Wireline Field Engineer for Schlumberger. 
                        </p>
                        <p>
                        My strengths in the workplace stem from my ability to build strong teams, find creative solutions, and adapt to changing circumstances in high-pressure environments. I thrive in challenging and diverse environments and am on the lookout for my next career adventure! 
                        </p>

                        <p>
                            <a href="/#/resume" className="text-info text-decoration-none"> View my resume |</a>
                            <a href="mailto:roxanna.vaught@gmail.com" className="text-primary text-decoration-none"> Send me an email</a>
                        </p>
                    </div>  
            </div>
        </section> 
  </Container> 
)}

export default About;