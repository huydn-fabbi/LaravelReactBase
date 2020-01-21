import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath
