import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import { ReactComponent as Pro } from '../../assets/images/sabita_silwal.svg'
import { Container, Row, Col } from 'react-bootstrap';
import './staticComponents.css';
class Home extends React.Component {
    render() {
        const spanStyle = { color: 'rgb(100,100,100)' }
        return (
            <Container style={{ marginTop: '20px', backgroundColor: '' }}>
                <Row>
                    <Col>
                        <Pro />
                    </Col>
                    <Col style={{ color: 'black', lineHeight: '25px' }}>
                        <p>
                            My name is Sabita Silwal, an MSGIS student at the Department of
                             Geography in the University of Utah, graduating in
                             May 2019. I have been working as a Research/Data Analyst at the
                             Energy and Geoscience Institute since 2013. I work with the
                              Biostratigraphy group and help in their projects where I
                              digitize biostratigraphic data and make graphical plots of
                              biostratigraphic and geochemical data along with making some
                            maps.
                        </p>
                        <p>
                            When I was undergraduate student, I worked in a project
                        related to Ancient Lake Bonneville and first bumped into
                        GIS where I had to use Lidar data and aerial photographs
                        to make maps. I really liked all the features and
                        capabilities of ArcGIS Desktop and decided to further my
                        knowledge of GIS. That’s how I found myself enrolling
                        in MSGIS.
                        </p>


                        {/* <h4>Name: <span style={spanStyle}>Sabita Silwal</span></h4>
                        <h4>Program:  <span style={spanStyle}>Master of Science(MS), Geographic Information Science</span></h4>
                        <h4>Major:  <span style={spanStyle}>GIS</span></h4>
                        <h4>Email: <span style={spanStyle}>silwal.sabita@gmail.com</span></h4>
                        <h4>Phone #: <span style={spanStyle}>8018341401</span> </h4> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;