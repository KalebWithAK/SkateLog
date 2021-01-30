import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Top from '../Components/Top/Top.js';
import Home from '../Views/Home.js';
import About from '../Views/About.js';
import Reviews from '../Views/Reviews.js';
import Shop from '../Views/Shop.js';

export default class ViewsRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Router>
                    <Top />

                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/reviews'><Reviews /></Route>
                        <Route path='/shop'><Shop /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}