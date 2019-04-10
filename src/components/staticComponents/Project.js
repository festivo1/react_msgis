import React from "react";
import { ReactComponent as GeoPic } from '../../assets/images/geoPic.svg';
import geoResult from '../../assets/images/geoResult.jpg'
import fieldVisit from '../../assets/images/advanced_geo_data_analysis/fieldVisit.jpg'
import locationMap from '../../assets/images/advanced_geo_data_analysis/locationMap.jpg'
import {ReactComponent as PebbleData} from '../../assets/images/advanced_geo_data_analysis/pebble_data.svg'
import pebbleResultGraph from '../../assets/images/advanced_geo_data_analysis/pebbleResult.jpg'
import linearityGraph from '../../assets/images/advanced_geo_data_analysis/linearityGraph.jpg'
// import { ReactComponent as GeoResult } from '../../assets/images/geoResult.svg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './projects.css';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
export class GWP extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <h5 style={{ textAlign: 'center' }}><b>GEOPROCESSING WITH PYTHON</b></h5>
                </div>
                <div style={{ margin: '20px' }}>
                    <h6><b>PROJECT:</b> CREATING MAP DOCUMENT OF BIOSTRATIGRAPHY DATA OF SOUTH ATLANTIC OCEAN</h6>
                    <h6><b>Objective:</b> Convert biostratigraphy data into feature class in geodatabase</h6>
                    <h6><b>Study Area:</b> 20 wells selected out of 100 well sites from South Atlantic</h6>
                    <ul style={{ marginLeft: '10px' }}>
                        <li>• Biostratigraphy data include microfossil and nannofossil data
                             such as foraminifera, calcareous  nannofossil, radiolarians,
                         palynos etc.</li>
                        <center style={{ marginTop: '20px' }}> <GeoPic style={{ width: "50%", height: '30%', }}></GeoPic></center>

                    </ul>
                    <h6><b>Problems</b></h6>
                    <ul style={{ marginLeft: '10px' }}>
                        <li>
                            • Original report of each well site contain fossil data in tables that lack key information like sample  depth, age and location
                    </li>
                        <li>• Fossil abundance are recorded using symbols
                    </li>

                    </ul>
                    <h6><b>Methodology</b></h6>
                    <ul style={{ marginLeft: '10px' }}>
                        <li>• Gather Data</li>
                        <li>• Input data in excel spreadsheet</li>
                        <li>• Specify coordinate system</li>
                        <li>• Python code to convert excel file into feature class in geodatabase</li>
                    </ul>
                    <h6><b>Solution</b></h6>
                    <div>Using Python code:</div>

                    <ul style={{ marginLeft: '10px' }}>
                        <li>• Arcpy</li>
                        <li>• arcpy.env.workspace</li>
                        <li>• prj</li>
                        <li>• arcpy.ExcelToTable</li>
                        <li>• arcpy.MakeXYEventLayer_management</li>
                        <li>• arcpy.CopyFeatures_management</li>
                        <li>• arcpy.Delete_management</li>

                    </ul>
                    <h6><b>Result</b></h6>
                    <center><img src={geoResult} style={{ width: "70%" }}></img></center>
                </div>
            </Container >
        );
    }
}

export class SDDG extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <h4 style={{ textAlign: 'center' }}><b>ADVANCED GEOGRAPHICAL DATA ANALYSIS</b></h4>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h5><b>Pebble Size Analysis to Determine the Distribution of Pebble in Dry Creek Area Using R</b></h5>
                    Location:Dry Creek, Salt Lake City, Utah
                </div>
                <div>
                    <h6><b>Introduction</b></h6>
                    <p>
                        There are different sizes of pebble conglomerate distributed along Dry Creek.
                        The purpose of this field study is to determine the mean and median size of the pebbles;
                         to see as we whether there is there is collinearity with the size of the pebble and
                         elevation along the stream; and also, to calculate the distribution pattern
                         of the pebbles in the creek.
                    </p>
                    <figure>
                        <center><img src={fieldVisit} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig1. - field Visit at Dry Creek.</figcaption>
                        </center>
                    </figure>
                </div>
                <div>
                    <h6><b>Study Area</b></h6>
                    <p>Dry Creek Canyon lies between east of Limekiln Gulch and west of Red Butte Reservoir.</p>
                    <figure>
                        <center><img src={locationMap} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption>
                        </center>
                    </figure>
                </div>
                <div>
                    <h6><b>Methodology</b></h6>
                    <p>The pebble count method (Wolman, 1954) is the most widely used method to measure
                        stream sediment size. In this method the length of three axes of the pebble is
                         measured, using ruler (digital caliper for our study) and intermediate axis is
                          used as pebble’s diameter or its size and we also used Trimble Juno GPS to measure
                           the location of each pebble.
                    </p>
                    <p>
                        To test the relationship between pebble sizes and elevation, first we will simply draw
                         a scatter plot of elevation vs pebble size in R Studio and if we see some linear pattern
                         then we can use simple linear regression model since there is only single explanatory
                         variable (elevation) associated with single response variable (pebble size).A linear
                         simple regression model assumes that relationships between variables are linear.
                         We set the null and alternate hypothesis as follows:
                     </p>
                    <p>Null hypothesis: H0: Pebble size does not vary with elevation</p>
                    <p>Alternate Hypothesis: H1= Pebble size varies with elevation
                        In RStudio, lm() function constructs a simple regression model and anova()
                         and summary () function can be used to run model diagnostic (Brewer, 2015).
                          We expect that the relationship between the variables that we have set will be linear.
                          We can check on the model by plotting the model line through the observation.
                           In RStudio, abline() function allows us to add straight lines to a
                            plot and do linearity check (Brewer, 2015).
                    </p>
                    {/* <figure>
                        <center><img src={locationMap} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption>
                        </center>
                    </figure> */}
                </div>
                <div>
                    <h6><b>Result</b></h6>
                    <p>Location and Pebble data collected from Dry Creek</p>
                    <figure>
                        <PebbleData/>
                        {/* <center><img src={locationMap} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption>
                        </center> */}
                    </figure>
                    <p>Results from R-Studio</p>
                    <figure>
                        <center><img src={pebbleResultGraph} style={{ width: '40%', height: '400px' }}></img>
                            {/* <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption> */}
                        </center>
                        <center><img src={linearityGraph} style={{ width: '40%', height: '400px' }}></img>
                            {/* <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption> */}
                        </center>
                    </figure>
                </div>


                <div>
                    <h6><b>Discussion</b></h6>
                    <p>The summary statistics for the model gave the F-statistics as 19.44 and
                         p- value as 0.0001391. So, we reject null hypothesis and accept 
                         alternate hypothesis. This suggest there is relationship between pebble 
                         size and elevation. The R2 value was 0.4098 and adjusted R2 value is 
                         0.3887 suggest that the model is a good fit considering we are only 
                         using elevation. Also, the linearity check plot line fits between the
                          observations suggesting there is relationship between elevation and 
                          pebble size.</p>
                    {/* <figure>
                        <center><img src={locationMap} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption>
                        </center>
                    </figure> */}
                </div>
            </Container>
        );
    }
}