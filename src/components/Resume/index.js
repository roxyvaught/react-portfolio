import React from 'react'; 

function Resume() {

return(

                <section id="resume">
                {/* Education
                ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>University of Louisiana at Lafayette</h3>
                        <p className="info">Master of Science, Geology <span>•</span> <em className="date">August 2016 - May 2018</em></p>
                        <p><span id='activities'>Thesis:</span> Tying Hydrologic Balance and Human Settlement Through Stable Isotope Analysis of Lacustrine Sediments
                        </p>
                        <p><span id='activities'>Activities:</span> President of the American Association of Petroleum Geologists (AAPG) on Campus (2017-2018)
                        </p>
                        <p>Team Lead - AAPG Imperial Barrel Award - 1st Place International Winners (2018)</p>

                        <h3>Florida State University</h3>
                        <p className="info">Bachelor of Science, Geology <span>•</span> <em className="date">July 2012 - December 2015</em></p>
                        <p><span id='activities'>Activities:</span> FSU Varsity Rowing Women's Team - 2012 -205
                        <p>President and Co-Founder of the National Alliance on Mental Illness (NAMI) on Campus at FSU</p>
                        </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work */}
                <div className="row work">
                    <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>Schlumberger</h3>
                        <p className="info">Wireline Field Engineer <span>•</span> <em className="date">October 2018 - March 2020</em></p>
                        <ul>
                            <li>
                            •	Led, supervised, and trained crews of 3-5 operators and engineer trainees to complete successful jobs in drilling rig, workover, and crane environments
                            </li>
                            <li>
                            •	Coordinated daily discussions between field crew, line management, sales, and client representative to ensure customer satisfaction and delivery of a high-quality product
                            </li>
                            <li>
                            •	Troubleshooted equipment failures in a time-sensitive environment and implemented preventative measures to avoid future failures
                            </li>
                            <li>
                            •	Went above and beyond to understand the clients’ projects to add value to in-field data interpretation and upsell services to assist them in reaching their goals
                            </li>
                            <li>
                            •	Efficiently managed field ops with an emphasis on health, safety, and environment – leading to a flawless HSE record when dealing with explosives, high pressure, and radiation 
                            </li>
                            <li>
                            •	Generated over $3M in revenue throughout the Permian 
                            </li>
                        </ul>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>TGS-NOPEC</h3>
                        <p className="info">Geoscience Intern <span>•</span> <em className="date">May 2018 - September 2018</em></p>
                        <ul>
                            <li>
                            •	Created straightforward presentations on complex data sets so that sales and marketing could better deliver the potential value of that data to our clients 
                            </li>
                            <li>
                            •	Performed data validation procedures and analysis on well completion and production data using Longbow
                            </li>
                            <li>
                            •	Generated regional framework maps, identified horizons, and created maps from a 3D seismic survey and well log data in the Delaware Basin
                            </li>
                        </ul>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <h3>University of Louisiana at Lafayette</h3>
                        <p className="info">Team Lead- Imperial Barrel Award Team<span>•</span> <em className="date">January 2018 - May 2018</em></p>
                        <ul>
                            <li>
                            •	Presented prospects as a team to a panel of professional geoscientists working in the oil and gas industry and won 1st place out of 168 teams from around the world
                            </li>
                            <li>
                                •	Identified prospects in the Great Australian Bight Basin by interpreting offshore 2D seismic data with IHS Kingdom, geomodelling with PetroMod, and well log analysis
                            </li>
                        </ul>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns" align="center">
                        <h3>University of Louisiana at Lafayette</h3>
                        <p className="info">Graduate Research and Teaching Assistant <span>•</span> <em className="date"> August 2016 - May 2018</em></p>
                        <ul>
                            <li>
                            •	Responsible for collecting and preparing samples from cores for oxygen, carbon, and nitrogen isotope analysis 
                            </li>
                            <li>
                            •	Efficiently performed x-ray diffraction (XRD) on lake core samples to determine mineralogy and composition
                            </li>
                            <li>
                            •	Created and presented lectures for 30-40 students per semester for Structural Geology, Physical Geology, and Mineralogy 
                            </li>
                            
                           </ul>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns" align="center">
                        <h3>U.S. Bureau of Land Management</h3>
                        <p className="info">Geology Intern <span>•</span> <em className="date"> May 2017 - August 2017</em></p>
                        <ul>
                            <li>
                            •	Worked with senior staff to adjudicate federal oil, gas, and geothermal leases using ArcGIS from ESRI  
                            </li>
                            <li>
                            •	Wrote Environmental Assessments (EAs) while adhering to National Environmental Policy Act (NEPA) guidelines
                            </li>
                           </ul>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
                ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <p>
                        
                    </p>
                    
                        <ul className="skills">
                        <li>HTML5/CSS</li>
                        <li>Javascript</li>
                        <li>Git</li>
                        <li>Node</li>
                        <li>SQL</li>
                        </ul>
                        <ul className="skills">
                        <li>Leadership and People Management</li>
                            <li>Spanish, French</li>
                            <li>Wireline Logging and Analysis</li>
                            <li>ESRI ArcGIS</li>
                            <li>HAZMAT Transportation</li>
                            <li>L4/L5 Explosives and Radiation Clearance</li>
                        </ul>
                    
                    </div> 
                </div> 
                </section> 

        )
}

export default Resume;