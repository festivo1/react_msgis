import React from 'react';
import HeaderComponent from './components/reusableComponents/HeaderComponents';
import Home from './components/staticComponents/Home';
import Project from './components/staticComponents/Project';
import Resume from './components/staticComponents/Resume';
import Contact from './components/staticComponents/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/reusableComponents/footerComponents';
import {GWP,SDDG} from './components/staticComponents/Project'
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
                        <Route exact path='/geoprocWithPython' component={GWP}></Route>
                        <Route exact path='/spatial-data-design-gis' component={SDDG}></Route>
                    </Switch>
                    <FooterComponent className='footer' />
                </div>
            </Router >
        )
    }

} export default App;