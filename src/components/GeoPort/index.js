import React from 'react'; 
import GeoProjectCards from '../../components/GeoProject'
import portfolio from '../../geoport.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h1 className="title">Journey In Geology</h1>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <GeoProjectCards key={project.id} 
              image={project.image} 
              name={project.name} 
              deploy={project.deploy} 
              topics={project.topics}
              description={project.description}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;