import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Card build-out using props
function GeoProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.deploy}><img src="https://img.icons8.com/ultraviolet/40/000000/go.png" alt="Deployed Site" id="project-icon"/></a> 
              </p>
              <p id="topics">
                    {props.topics}
                </p>
        </div>
      </div>
    );
}
  
  export default GeoProjectCards;