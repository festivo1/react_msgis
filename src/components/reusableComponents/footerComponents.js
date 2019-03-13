import React from "react";
import { Link } from "react-router-dom";
// import './footerComponents.css';
function FooterComponent() {
    const divStyle = {
       
        height: "60px",
        backgroundColor: 'lightblue',
        textAlign: 'right',
        border: '2px solid green',
        borderStyle:'solid solid none solid',
        borderRadius: '0px 0px 25px 25px',
        lineHeight:'80%',

    }
    return (
        <div style={divStyle} >
            
            {/*  moves 50 px left from the relative position of the div */}
            {/* <div style={{position:'relative', right:'80px', wordSpacing:'15px'}}>
                <Link to="/" style={{ textDecoration: 'none' }}>HOME </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }} > PROJECTS  </Link>
                <Link to="/resume" style={{ textDecoration: 'none' }} > RESUME</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} > CONTACT</Link>
            </div> */}
        </div>
    );

}
export default FooterComponent;