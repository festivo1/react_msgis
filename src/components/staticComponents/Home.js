import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import { ReactComponent as Pro } from '../../assets/images/sabita_silwal.svg'
import {Container, Row, Col} from 'react-bootstrap';
import './staticComponents.css';
class Home extends React.Component {
    render(){
        const spanStyle={color:'rgb(100,100,100)'}
    return (
        <Container style={{marginTop:'20px', backgroundColor:''}}>
            <Row>
                <Col>
                  <Pro/>
                </Col>
                <Col style={{color:'rgb(100,10,10)',lineHeight:'30px'}}>
                    <h4>Name: <span style={spanStyle}>Sabita Silwal</span></h4>
                    <h4>Program:  <span style={spanStyle}>Master of Science(MS), Geographic Information Science</span></h4>
                    <h4>Major:  <span style={spanStyle}>GIS</span></h4>
                    <h4>Email: <span style={spanStyle}>silwal.sabita@gmail.com</span></h4>
                    <h4>Phone #: <span style={spanStyle}>8018341401</span> </h4>
                </Col>
            </Row>
        </Container>
    );
}
}
export default Home;