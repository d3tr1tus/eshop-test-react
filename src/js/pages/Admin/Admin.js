import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from "react-redux";
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';

// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// Import Main styles for this application
import './scss/style.scss'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

import {authorize} from './../../actions/userAction';

// import { renderRoutes } from 'react-router-config';
let cookies = new Cookies();

@connect((store) => {
    return {
        user: store.user,
        loader: store.loader,
        alert: store.alert
    };
})

class Admin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.user.fetched) {
            let acces_token = cookies.get('access_token');
            this.props.dispatch(authorize(acces_token, this));
        }
    }

    verifyRoute = () => {
        let location = this.props.location;
        if (this.props.user.fetched && (location.pathname != "/401")) {
            let data = this.props.user.data;
            if (!data) {
                this.props.history.push({pathname: "/401", state: {url: location.pathname}});
            }
        }
    };

    render() {
        return (
            <div>
                {this.props.user.fetched ?
                    <HashRouter>
                        <Switch>
                            <Route exact path="/login" name="Login Page" component={Login}/>
                            <Route exact path="/register" name="Register Page" component={Register}/>
                            <Route exact path="/404" name="Page 404" component={Page404}/>
                            <Route exact path="/500" name="Page 500" component={Page500}/>
                            <Route path="/" name="Home" component={DefaultLayout}/>
                        </Switch>
                    </HashRouter>
                    : ""}
            </div>
        );
    }
}

export default Admin;
