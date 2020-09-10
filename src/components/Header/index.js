import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import GeoPort from '../../components/GeoPort';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import logo from '../../assets/images/logo-wh.png';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <a href="https://roxyvaught.github.io/react-portfolio/"><img src={logo} alt="logo" class="icon" id="astro"/></a>
                <Navigation/>
            </div>
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/geoport" component={GeoPort}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;