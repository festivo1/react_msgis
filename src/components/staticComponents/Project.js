import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
class Project extends React.Component {
    render() {
        const divStyle = {
            padding: '50px',
            backgroundColor: 'grey',
            border: '2px solid green',
        }
        return (
            <div>
                <div style={divStyle}>
                <img src={profilePic} alt={"LOGO"} style={{
                width: "50%"
                }}/> 
                <div>
                        I am inside home button
        </div>
                </div>
            </div>
        );
    }
}
export default Project;