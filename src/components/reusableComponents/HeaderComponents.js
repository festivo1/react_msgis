import React from "react";
import { Link } from "react-router-dom";
import './headerComponents.css';
function HeaderComponent() {
    const divStyle = {
       
        height: "130px",
        backgroundColor: 'lightblue',
        textAlign: 'right',
        border: '2px solid green',
        borderStyle:'solid solid none solid',
        borderRadius: '25px 25px 0px 0px',
        lineHeight:'80%',

    }
    return (
        <div style={divStyle} >
            <div style={{textAlign:'center',}}>
                <h1 style={{color:'green'}}>MSGIS Portfolio</h1>
                <h2>Sabita Silwal</h2>
            </div>
            {/*  moves 50 px left from the relative position of the div */}
            <div style={{position:'relative', right:'80px', wordSpacing:'15px'}}>
                <Link to="/" style={{ textDecoration: 'none' }}>HOME </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }} > PROJECTS  </Link>
                <Link to="/resume" style={{ textDecoration: 'none' }} > RESUME</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} > CONTACT</Link>
            </div>
        </div>
    );

}
export default HeaderComponent;