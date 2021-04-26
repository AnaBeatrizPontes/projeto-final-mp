import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PagesLogin from './Login/Login'
import PagesRegister from './Register/Register'
import PagesHome from './Home/Home'
import PagesNotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

const Root = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/home" component={PagesHome} />
                <Route exact path="/register" component={PagesRegister} />
                <Route exact path="/" component={PagesLogin} />
                <PrivateRoute component={PagesNotFound} />
            </Switch>
        </Router>
    );
};

export default Root;