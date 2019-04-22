import React from 'react';
import HeaderComponent from './components/reusableComponents/HeaderComponents';
import Home from './components/staticComponents/Home';
//import Project,from './components/staticComponents/Project';
import Resume from './components/staticComponents/Resume';
import Contact from './components/staticComponents/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/reusableComponents/footerComponents';
import {Capstone, GWP,ADDA, PM,SDDG, SMWG, WebGIS} from './components/staticComponents/Project'
// import './App.css';
class App extends React.Component {
    render() {
        const divStyle = {



        }
        return (
            <Router>
                <div className='wrapper'>
                    <HeaderComponent className='header' />
                    <Switch className="main">
                        <Route exact path='/' component={Home}></Route>
                        {/* <Route exact path='/projects' component={Project}></Route> */}
                        <Route exact path='/resume' component={Resume}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/capstone' component={Capstone}></Route>
                        <Route exact path='/advanced-geographical-data-analysis' component={ADDA}></Route>
                        <Route exact path='/geoprocessing-with-Python' component={GWP}></Route>
                        {/* <Route exact path='/gis-public-health' component={GPH}></Route> */}
                        <Route exact path='/project-management' component={PM}></Route>
                        <Route exact path='/spatial-data-design-gis' component={SDDG}></Route>
                        <Route exact path='/spatial-modelling-WGIS' component={SMWG}></Route>
                        <Route exact path='/webgis' component={WebGIS}></Route>
                    </Switch>
                    <FooterComponent className='footer' />
                </div>
            </Router >
        )
    }

} export default App;