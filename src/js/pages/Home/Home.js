import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import AddUser from './../../components/Form/AddUser/AddUser';

@connect((store) => {
    return {
        user: store.user,
        loader: store.loader,
        alert: store.alert
    };
})

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/about">About</Link><br />
                <Link to="/admin">Admin</Link>
                <AddUser homeProps={this.props} _this={this} />
            </div>
        );
    }
}

export default Home;