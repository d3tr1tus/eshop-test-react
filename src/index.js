import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Switch, BrowserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";

import App from './js/pages/App/App';
import Home from './js/pages/Home/Home';
import About from './js/pages/About/About';
import Admin from './js/pages/Admin/Admin';
import NotFound from './js/pages/NotFound/NotFound';
import Footer from './js/pages/Footer/Footer';

import store from './js/store';

const app = document.getElementById('app');

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App} />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/admin" component={Admin} />
                <Route path="/404" component={NotFound} />
                <Route path="/" component={Footer} />
            </div>
        </Router>
    </Provider>
    , app
);

module.hot.accept();