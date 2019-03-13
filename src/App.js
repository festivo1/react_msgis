import React from 'react';
import HeaderComponent from './components/reusableComponents/HeaderComponents';
import Home from './components/staticComponents/Home';
import Project from './components/staticComponents/Project';
import Resume from './components/staticComponents/Resume';
import Contact from './components/staticComponents/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/reusableComponents/footerComponents';
class App extends React.Component {
    render() {
        const divStyle = {
            
            

        }
        return (
            <Router>
                <div style={divStyle}>
                    <HeaderComponent />
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/projects' component={Project}></Route>
                        <Route exact path='/resume' component={Resume}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                    </Switch>
                    <FooterComponent/>
                </div>
            </Router >
        )
    }

} export default App;