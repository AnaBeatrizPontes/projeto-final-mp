import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import PagesHome from './Home/Home';
import PagesNotFound from './NotFound';
import HomepageRespondente from './HomepageRespondente/Homepage'
import PagesMyFormsList from './MyFormsList/MyFormsList';
import Feedbacks from './Feedbacks/Feedbacks';

//Components
import PrivateRoute from './PrivateRoute';


const Root = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/home" component={PagesHome} />
        	<Route exact path="/register" component={PagesRegister} />
        	<Route exact path="/" component={PagesLogin} />
			<Route exact path="/homepage" component={HomepageRespondente} />
			<Route exact path="/forms" component={PagesMyFormsList} />
			<Route exact path="/feedback/:id" component={Feedbacks} />	  
        <PrivateRoute component={PagesNotFound} />
      </Switch>
    </Router>
  );

};

export default Root;
