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
    return (
        <div>
            <div>
                <Pro style={{ position: 'relative', width: '35%', left: '30%' }} />
                <div>

                </div>
            </div>
        </div>
    );
}
export default Home;