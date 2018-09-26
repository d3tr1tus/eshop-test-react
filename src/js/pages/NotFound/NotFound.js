import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>404 Page Not Found</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default NotFound;