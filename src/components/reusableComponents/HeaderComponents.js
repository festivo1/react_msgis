import React from "react";
import { Link } from "react-router-dom";
// import './headerComponents.css';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
function HeaderComponent() {
    const divstyle = { marginRight: '30px', };
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: 'grey', }}>
                <div> <h1 >MSGIS Portfolio</h1> </div>
                <div> <h2>Sabita Silwal</h2> </div>
            </div>
            {/*  moves 50 px left from the relative position of the div */}
            <div style={{ textAlign: 'left', backgroundColor: 'lightgreen', padding: '15px', marginTop: '-8px' }}>
                {/* <Link to="/" style={{ textDecoration: 'none' }}>HOME </Link>

                <Navbar>
                    <Nav>
                        <NavDropdown eventKey={1} title="Projects" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>
                                <button className="content-links">
                                    <b><Link to="/projects" style={{ textDecoration: 'none' }} > Geoprocessing with Python  </Link></b>
                                </button>
                            </MenuItem>

                        </NavDropdown>
                    </Nav>
                </Navbar>
                <Link to="/resume" style={{ textDecoration: 'none' }} > RESUME</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }} > CONTACT</Link> */}
                {/* <Nav pullRight>
                    <LinkContainer to="/">
                        <NavItem eventKey={1}>HOME</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/resume">
                        <NavItem eventKey={2}>RESUME</NavItem>
                    </LinkContainer>
                    <NavDropdown eventKey={3} title="Authorization" id="basic-nav-dropdown">
                        <LinkContainer to="/logout">
                            {/* <MenuItem eventKey={3.1}>Logout</MenuItem> */}
                {/* </LinkContainer>
                    </NavDropdown> */}
                {/* </Nav> */}
                <Nav variant="pills" activeKey="1">
                    <Nav.Item style={divstyle}>
                        <LinkContainer to="/">
                            <NavItem eventKey={1} >HOME</NavItem>
                        </LinkContainer>
                    </Nav.Item>
                    <NavDropdown title="PROJECTS" id="nav-dropdown" style={{ marginLeft: '20px', margin: '-8px' }}>
                        <NavDropdown.Item eventKey="4.1"><Link to="/capstone" style={{ textDecoration: 'none' }} ><button>Capstone </button>  </Link></NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><Link to="/advanced-geographical-data-analysis" style={{ textDecoration: 'none' }} ><button>Advanced Geographical data Analysis </button>  </Link></NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3"><Link to="/geoprocessing-with-python" style={{ textDecoration: 'none' }}><button>Geoprocessing with Python</button></Link></NavDropdown.Item>
                        {/* <NavDropdown.Item eventKey="4.4"><Link to="/gis-public-health" style={{ textDecoration: 'none' }}><button>GIS Public Health</button></Link></NavDropdown.Item> */}
                        <NavDropdown.Item eventKey="4.5"><Link to="/project-management" style={{ textDecoration: 'none' }}><button>Project Management</button></Link></NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6"><Link to="/spatial-data-design-gis" style={{ textDecoration: 'none' }}><button>Spatial Data Design GIS</button></Link></NavDropdown.Item>
                        {/* <NavDropdown.Item eventKey="4.2"><Link to="/spatial-modelling-WGIS" style={{ textDecoration: 'none' }}>Spatial Modelling WGIA</Link></NavDropdown.Item> */}
                        <NavDropdown.Item eventKey="4.7"><Link to="/webgis" style={{ textDecoration: 'none' }}><button>WebGIS</button></Link></NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Item style={{ marginLeft: '30px', }}>
                        <LinkContainer to="/resume">
                            <NavItem eventKey={2}>RESUME</NavItem>
                        </LinkContainer>

                    </Nav.Item>
                    <Nav.Item style={{ marginLeft: '30px', }}>
                        <LinkContainer to="/contact">
                            <NavItem eventKey={3}>CONTACT</NavItem>
                        </LinkContainer>

                    </Nav.Item>

                </Nav>
            </div>
        </div>
    )

}
export default HeaderComponent;