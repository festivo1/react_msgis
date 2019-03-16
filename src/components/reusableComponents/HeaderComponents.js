import React from "react";
import { Link } from "react-router-dom";
import './headerComponents.css';
function HeaderComponent() {
    return (
        <div className='fixed-header' >
            <div style={{textAlign:'center',}}>
                <h1 style={{color:'green'}}>MSGIS Portfolio</h1>
                <h2>Sabita Silwal</h2>
            </div>
            {/*  moves 50 px left from the relative position of the div */}
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>HOME </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }} > PROJECTS  </Link>
                <Link to="/resume" style={{ textDecoration: 'none' }} > RESUME</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} > CONTACT</Link>
            </div>
        </div>
    );

}
export default HeaderComponent;