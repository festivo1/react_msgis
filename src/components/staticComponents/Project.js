import React from "react";
import profilePic from '../../assets/images/sabita_silwal.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './projects.css';
import {Nav, Navbar, NavItem, NavDropdown} from "react-bootstrap";
// class Project extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
         
//       }
//     }
//     handleScreeningClick=()=>{
//         console.log("hi");
//     }
    
//     render(){
//         return(
// <Navbar>
//     <Nav>
//         <NavDropdown eventKey={1} title="Screening" id="basic-nav-dropdown">
            
//                 <button className="content-links" onClick={this.handleScreeningClick}>
//                     <b>Send Request (Natural person)</b>
//                 </button>
            
//         </NavDropdown>
//     </Nav>
// </Navbar>
//         )
//     }
// }
// export default Project;

export class GWP extends React.Component{
    render(){
        return(
            <div>
                I am inside gwp
            </div>
        );
    }
}

export class SDDG extends React.Component{
    render(){
        return(
            <div>
                I am inside sddg
            </div>
        );
    }
}