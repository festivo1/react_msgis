import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import { ReactComponent as Pro } from '../../assets/images/sabita_silwal.svg'
import { Container, Row, Col, Image } from 'react-bootstrap';
function Home() {
    const divStyle = {
        padding: '50px',
        backgroundColor: 'grey',
        border: '2px solid green',
    }
    // "engines": {
    //     "npm": "6.4.1",
    //     "node": "10.15.2"
    //   },
    //"serve": "^10.1.2"
    // "scripts": {
    //     "dev": "react-scripts start",
    //     "start": "serve -s build",
    //     "build": "react-scripts build",
    //     "test": "react-scripts test --env=jsdom",
    //     "eject": "react-scripts eject",
    //     "heroku-postbuild": "npm run build"
    //   },
    return (
        <div>
            <div style={divStyle}>
                {/* <img src={profilePic} alt={"LOGO"} style={{
                    position: 'relative',
                    left: '500px', width: "300px", height: '450px'
                }}/> */}
                {/* <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={profilePic} rounded />
                        </Col>
                        
                    </Row>
                </Container>; */}
                <Pro style={{position:'relative',width:'35%', left:'30%'}}/>
                <div>
                    I am inside home button
        </div>
            </div>
        </div>
    );
}
export default Home;