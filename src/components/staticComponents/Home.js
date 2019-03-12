import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import {Container, Row, Col, Image} from 'react-bootstrap';
function Home() {
    const divStyle = {
        padding: '50px',
        backgroundColor: 'grey',
        border: '2px solid green',
    }
    return (
        <div>
            <div style={divStyle}>
                {/* <img src={profilePic} alt={"LOGO"} style={{
                    position: 'relative',
                    left: '500px', width: "300px", height: '450px'
                }}/> */}
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={profilePic} rounded />
                        </Col>
                        
                    </Row>
                </Container>;
                <div>
                    I am inside home button
        </div>
            </div>
        </div>
    );
}
export default Home;