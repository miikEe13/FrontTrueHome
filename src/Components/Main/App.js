import React, { Component } from 'react';
import Header from "../Html/Header"
import Footer from "../Html/Footer"
import { Switch, Route } from "react-router-dom";

import Home from "../../Pages/Home"
import Property from "../../Pages/Property"

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container general-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/propertys/:id" component={Property} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}
