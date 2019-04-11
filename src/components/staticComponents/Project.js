import React from "react";
import { ReactComponent as GeoPic } from '../../assets/images/geoPic.svg';
import geoResult from '../../assets/images/geoResult.jpg'
import fieldVisit from '../../assets/images/advanced_geo_data_analysis/fieldVisit.jpg'
import locationMap from '../../assets/images/advanced_geo_data_analysis/locationMap.jpg'
import { ReactComponent as PebbleData } from '../../assets/images/advanced_geo_data_analysis/pebble_data.svg'
import pebbleResultGraph from '../../assets/images/advanced_geo_data_analysis/pebbleResult.jpg'
import linearityGraph from '../../assets/images/advanced_geo_data_analysis/linearityGraph.jpg'
import county_vs_asthma from '../../assets/images/gis_public_health/county_vs_asthma.jpg'
import erdiagram from '../../assets/images/spatial_data_design_gis/ER_diagram.jpg'
import relational_model from '../../assets/images/spatial_data_design_gis/relational_model.jpg'
import object_oriented_model from '../../assets/images/spatial_data_design_gis/object_oriented_model.jpg'
import atlantic_ocean from '../../assets/images/project_management/atlantic_ocean.jpg'
import study_area from '../../assets/images/project_management/study_area.jpg'
import communication_management from '../../assets/images/project_management/communication_management.jpg'
import cost_estimation from '../../assets/images/project_management/cost_estimation.jpg'
import financial_analysis from '../../assets/images/project_management/financial_analysis.jpg'
import gantt_chart from '../../assets/images/project_management/gantt_chart.jpg'
import human_resource_management from '../../assets/images/project_management/human_resource_management.jpg'
import project_charter from '../../assets/images/project_management/project_charter.jpg'
import stakeholder_management from '../../assets/images/project_management/stakeholder_management.jpg'
import stakeholder_management_plan from '../../assets/images/project_management/stakeholder_management_plan.jpg'
import result from '../../assets/images/webgis/result.jpg'


// import { ReactComponent as GeoResult } from '../../assets/images/geoResult.svg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './projects.css';
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
export class ADDA extends React.Component {
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
                        <PebbleData />
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
export class GPH extends React.Component {
    render() {
        return (

            <Container>
                <div>
                    <h5 style={{ textAlign: 'center' }}>GIS and Public Health<b> </b></h5>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h5><b>Analyzing relationship of air quality and
                        respiratory diseases in Uta</b></h5>

                </div>
                <div>
                    <h6><b>Introduction</b></h6>
                    <p>
                        Air pollution has long been linked to many adverse effects to health like
                        many respiratory, cardiovascular diseases and asthma. Asthma is a chronic
                        inflammatory diseases of the lungs (Utah Asthma Program). It is also
                        triggered by air pollution. According to the United States Census Bureau,
                        Utah has a population of about 2,995,919 in 2015. This population is
                        distributed in 29 counties of Utah. American Lung Association published
                        a report in 2016 called “State of the Air 2016” which has placed three
                        Utah Cities, Salt Lake City, Provo and Orem in its sixth and Logan as
                        the seventh most polluted cities by ShortTerm Particle Pollution that
                        will put people at risk for respiratory disease. Thus, I would like to
                        study the relationship between the air quality and respiratory diseases
                        Asthma) in Utah. Through this research I want to know about the spatial
                        distribution of air pollution and correlation between the concentration
                        of air pollutants and annual hospitalization rate for respiratory
                        disease like Asthma.

                    </p>
                    {/* <figure>
                        <center><img src={fieldVisit} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig1. - field Visit at Dry Creek.</figcaption>
                        </center>
                    </figure> */}
                </div>
                <div>
                    <h6><b>Methodology Data</b></h6>
                    <p>There were two types of datasets used to analyze association between
                        air quality and respiratory diseases in Utah. First data is age
                        adjusted rate of hospitalization for asthma per 10,000 population
                        for Utah counties from 2009-2011 retrieved from OpenDataCatalog of
                        Utah.gov and second type of dataset was air pollutant concentration
                        received from different monitoring station retrieved from web portal
                         of Utah Department of Environmental Quality. </p>
                </div>
                <div>
                    <h6><b>Asthma Hospital Admission Data</b></h6>
                    <p>The summary of age adjusted rate of hospitalization for asthma per
                        10,000 population for Utah counties from 2009-2011 is given in
                        Table 1. According to the data, Uintah County had the highest
                        record in asthma hospitalization of 15 in 2011, followed by 14.3
                        of Garfield County in 2009. Similarly Uintah County had records of
                        11.4, 11.7 and 15 for year 2009 to 2011 which is significantly
                        higher and also in double digits compared to other county. Sevier
                        county has second highest records of Asthma hospitalization records
                        from 2009-2011. The blank spaces in the table signifies suppressed
                        records which was not recorded. Asthma hospitalization rates for
                        different counties of Utah is also represented in Figure 1.
                        </p>
                    <figure>
                        <center><img src={county_vs_asthma} style={{ width: '80%', }}></img>
                            <figcaption>Fig1. - County-wise Asthma Hospitalization rates in counties of Utah</figcaption>
                        </center>
                    </figure>
                </div>

            </Container>
        );
    }
}
export class PM extends React.Component {
    render() {
        const deliverables = [
            "•	Digitized biostratigraphy and geochemical data",
            "•	Graphic correlation chart that describes the age and paleoenvironmental interpretation using biostratigraphy data",
            "•	Wheeler diagrams to illustrate the local and regional chronostratigraphy",
            "•	Geochemical charts that describe the source rock characterization and type",
            "•	ArcGIS delivery of the digitized, analyzed data and charts "


        ];
        const deliverablesList = deliverables.map((deliverable, index) =>
            <li key={index}>{deliverable}</li>
        );
        return (

            <Container>
                <div>
                    <h4 style={{ textAlign: 'center' }}><b>Project Management</b></h4>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h5><b>EGI Oceans Region 2 Sector 1: Petroleum System Analysis
                        of the Central Atlantic Ocean</b></h5>
                </div>
                <div>
                    <h6><b>Introduction</b></h6>
                    <p>
                        In 2014, Advisory Board of EGI understood the need of revised
                         understanding of petroleum systems of Ocean basins. EGI Oceans
                         was formed in November 2014 to reevaluate the stratigraphy and
                         petroleum systems of major Ocean basins. December 2016, EGI Oceans
                         reevaluated 20 key Deep Sea Drilling Project (DSDP) and Ocean
                         Drilling Project (ODP) well sites of South Atlantic and filled the
                         gaps present in these projects by reanalyzing some of the sample
                         depth. As the phase 1 is coming to end, EGI Oceans is now purposing
                         to start Region 2 of the project by reevaluating 17 sites of Central
                         Atlantic with five sponsors carried over from phase 1 and adding 1
                         sponsor.
                    </p>
                    <figure>
                        <center><img src={atlantic_ocean} style={{ width: '60%', height: '100%' }}></img>
                            <figcaption>Fig1. - atlantic_ocean.</figcaption>
                        </center>
                    </figure>
                </div>
                <div>
                    <h6><b>Study Area</b></h6>
                    <figure>
                        <center><img src={study_area} style={{ width: '60%', height: '100%' }}></img>
                            <figcaption>Fig2. - study area in atlantic_ocean.</figcaption>
                        </center>
                    </figure>
                </div>
                <div>
                    <h6><b>1. Scope Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        <h6><b>Project Charter</b></h6>
                        <figure>
                            <center><img src={project_charter} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig3. - proect_charter.</figcaption>
                            </center>
                        </figure>

                        <h6><b>Deliverables</b></h6>
                        <ul>{deliverablesList}</ul>
                    </div>
                </div>
                <div>
                    <h6><b>2. Time Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        <h6><b>Gantt Chart</b></h6>
                        <figure>
                            <center><img src={gantt_chart} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig4. - Gantt_chart</figcaption>
                            </center>
                        </figure>
                        <h6><b>Program Evaluation and Review Techinique(PERT)</b></h6>
                        <p>Definition of PERT: Optimistic time + 4 * most likely time + pessimistic time/6</p>
                        <p>=200 days + 4 * 250 days + 290 days / 6 = 248 days </p>
                    </div>
                </div>
                <div>
                    <h6><b>3. Cost Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        <h6><b>Cost Esitmate</b></h6>
                        <figure>
                            <center><img src={cost_estimation} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig5. - cost estimation</figcaption>
                            </center>
                        </figure>
                        <h6><b>Financial Analysis</b></h6>
                        <figure>
                            <center><img src={financial_analysis} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig6. - financial analysis</figcaption>
                            </center>
                        </figure>
                    </div>
                </div>

                <div>
                    <h6><b>4. Human Resource Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        {/* <h6><b>Cost Esitmate</b></h6> */}
                        <figure>
                            <center><img src={human_resource_management} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig6. - human resource Management</figcaption>
                            </center>
                        </figure>

                    </div>
                </div>
                <div>
                    <h6><b>5. Stakeholder Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        <h6><b>Stakeholder Register</b></h6>
                        <figure>
                            <center><img src={stakeholder_management} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig7. - Stakeholder Management</figcaption>
                            </center>
                        </figure>
                        <h6><b>Stakeholder Management Plan</b></h6>
                        <figure>
                            <center><img src={stakeholder_management_plan} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig8. - Stakeholder Management plan</figcaption>
                            </center>
                        </figure>

                    </div>
                </div>
                <div>
                    <h6><b>6. Communication Management</b></h6>
                    <div style={{ marginLeft: '15px' }}>
                        <h6><b>Stakeholder Communication Analysis</b></h6>
                        <figure>
                            <center><img src={communication_management} style={{ width: '100%', height: '100%' }}></img>
                                <figcaption>Fig9. -Communication Management Analysis</figcaption>
                            </center>
                        </figure>


                    </div>
                </div>

            </Container>
        );
    }
}
export class SDDG extends React.Component {

    render() {
        const methodologyList = [
            "Build a conceptual model of the database using E-R diagram",
            "Develop a relational model to demonstrate the logical structure of the database",
            "Create an object-oriented database model to closely monitor the object-relational structure of the Arc geodatabase",
            "Server database implementation"
        ]
        const listItems = methodologyList.map((str, index) =>
            <li key={index}>{str}</li>
        );
        return (
            <Container>
                <div>
                    <h4 style={{ textAlign: 'center' }}><b>Spatial Data Design GIS</b></h4>
                </div>
                {/* <div style={{ textAlign: 'center' }}>
                    <h5><b>Pebble Size Analysis to Determine the Distribution of Pebble in Dry Creek Area Using R</b></h5>
                    Location:Dry Creek, Salt Lake City, Utah
                </div> */}
                <div>
                    <h6><b>Introduction</b></h6>
                    <p>
                        The Catmandu county wants to create and manage GIS data for the newly
                         formed city King’s Way. The main purpose of this project is to develop
                          a database to store and manage the information that King’s
                           Way City will need to operate.
                    </p>
                    {/* <figure>
                        <center><img src={fieldVisit} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig1. - field Visit at Dry Creek.</figcaption>
                        </center>
                    </figure> */}
                </div>
                {/* <div>
                    <h6><b>Study Area</b></h6>
                    <p>Dry Creek Canyon lies between east of Limekiln Gulch and west of Red Butte Reservoir.</p>
                    <figure>
                        <center><img src={locationMap} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig2. - Location Map of Research Project(soruce: google earth, 2015).</figcaption>
                        </center>
                    </figure>
                </div> */}
                <div>
                    <h6><b>Methodology</b></h6>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                <div>
                    <h6><b>Result</b></h6>
                    <p>E-R diagram</p>
                    <figure>

                        <center><img src={erdiagram} style={{ width: '100%', height: '100%' }}></img>
                            <figcaption>Fig1. - E-R diagram</figcaption>
                        </center>
                    </figure>

                    <figure>
                        <center><img src={relational_model} style={{ width: '100%', height: '100%' }}></img>
                            <figcaption>Fig2. - Relational database model created using mysql Workbench</figcaption>
                        </center>
                        <center><img src={object_oriented_model} style={{ width: '100%', height: '100%' }}></img>
                            <figcaption>Fig3. - Object oriented database model using mysql workbench</figcaption>
                        </center>
                    </figure>
                </div>


                {/* <div>
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
                {/* </div> */}
            </Container>
        );
    }
}
export class SMWG extends React.Component {
    render() {
        return (

            <Container>I am SMWG</Container>
        );
    }
}
export class WebGIS extends React.Component {
    render() {
        return (

            <Container>

                <div>
                    <h4 style={{ textAlign: 'center' }}><b>WEBGIS</b></h4>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h5><b>Designing Geospatial Web Services to Investigate
                        Patterns of Public Supply of Ground Water in Nevada</b></h5>
                </div>
                <div>
                    <h6><b>Introduction</b></h6>
                    <div>
                        For this project, I had to publish three web services for Nevada.
                        The services that I chose to publish were:</div>
                    <div> 1.	Map Services of total population of Nevada for the year 2010,
                        public supply of ground water  withdrawal for the year 2010 and
    intersect of population and ground water withdrawal</div>
                    <div> 2.	Image service of ground water level monitoring stations at
                            different locations of Nevada and image of map of population
                              distribution and water supply</div>
                    <div> 3.	Pop up and search which allows user to search addresses and
                            display total population and groundwater withdrawal for the respective
                        county</div>
                    <div style={{marginTop:"15px"}}>Data used for the project are as follows:
                    <ul>

                            <li>•	Water Use Data for Nevada</li>
                            <li>•	Nevada Census data, US Census Bureau, 2010</li>
                            <li>•	Shapfiles of counties of Nevada</li>
                        
                        </ul>
                    </div>
                    <div><b>Application</b>
                         <figure>
                        <center><img src={result} style={{ width: '100%', height: '100%' }}></img>
                            <figcaption>Fig1. -ScreenShot of Application</figcaption>
                        </center>
                    </figure>
                    <a href="http://content.csbs.utah.edu/~u0711476/Project/SilwalFinalProject"target="_blank">http://content.csbs.utah.edu/~u0711476/Project/SilwalFinalProject</a>
                    </div>


                    {/* <figure>
                        <center><img src={fieldVisit} style={{ width: '40%', height: '400px' }}></img>
                            <figcaption>Fig1. - field Visit at Dry Creek.</figcaption>
                        </center>
                    </figure> */}
                </div>
            </Container>
        );
    }
}