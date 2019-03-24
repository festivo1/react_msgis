import React from "react";
import { Link } from "react-router-dom";
import './headerComponents.css';
import {Dropdown} from 'react-bootstrap'
function HeaderComponent() {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor:'grey' }}>
                <h1 style={{ color: 'green' }}>MSGIS Portfolio</h1>
                <h2>Sabita Silwal</h2>
            </div>
            {/*  moves 50 px left from the relative position of the div */}
            <div style={{textAlign:'right', backgroundColor:'lightgreen', padding:'0px'}}>
                <Link to="/" style={{ textDecoration: 'none' }}>HOME </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }} > PROJECTS  </Link>
               {/* <span> <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/projects">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </span> */}
                <Link to="/resume" style={{ textDecoration: 'none' }} > RESUME</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} > CONTACT</Link>
            </div>
        </div>
    );

}
export default HeaderComponent;