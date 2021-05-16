/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import RespostaQuestionario from './RespostaQuestionario/RespostaQuestionario';
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import NavBar from '../components/NavBar/NavBar';
import HomepageRespondente from './HomepageRespondente/Homepage';
import Feedbacks from './Feedbacks/Feedbacks';
import PagesMyFormsList from './MyFormsList/MyFormsList';
import CreateMyForms from './Create/Create';

const Root = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/myforms" component={PagesMyFormsList} />
        <PrivateRoute exact path="/create" component={CreateMyForms} />
        <Route exact path="/register" component={PagesRegister} />
				<Route exact path="/login" component={PagesLogin} />
				<PrivateRoute exact path="/feedbacks/:id" component={Feedbacks} />
        <PrivateRoute component={PagesNotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
