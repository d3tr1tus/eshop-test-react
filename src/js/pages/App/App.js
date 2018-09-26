import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import Cookies from 'universal-cookie';

import './App.scss';

@connect((store) => {
    return {
        user: store.user,
        loader: store.loader,
        alert: store.alert
    };
})

class App extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.user);
    }

    loader = () => {
        if (this.props.loader.loadingStart) {
            return (
                <div>Načítání...</div>
            )
        }
    };

    render() {
        if (this.props.location.pathname !== "/admin") {
            return (
                <div>
                    Ahoj
                    {this.loader()}
                </div>
            );
        } else {
            return("");
        }
    }
}

export default App;