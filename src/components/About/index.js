import React from 'react';
import profile from '../../assets/images/roxanna.JPG';
import { Container } from 'react-bootstrap';

function About() {
  return(
  <Container fluid>
     <section className="section-title container">
                <h1 className="page-header">Roxanna Vaught-Mijares</h1>
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" id="profile" src={profile} alt="Roxanna Vaught"/>
                        <p id="aboutp">
                        I am a geologist and web developer in training with a diverse background in oil and gas. I graduated with my Bachelor's Degree in 2015 and obtained my Master's Degree in 2018, both in geology. During that time, I have been lucky enough to work with the US Bureau of Land Management, TGS-NOPEC, and in the Permian Basin as a Wireline Field Engineer for Schlumberger. Now, I am on the hunt to learn a new skill set while looking for my next adventure!
                        </p>
                        <p>

                        </p>

                        <p>
                            <a href="/#/resume" className="text-light text-decoration-none"> View my resume</a>
                        </p>
                    </div>  
            </div>
        </section> 
  </Container> 
)}

export default About;