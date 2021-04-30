import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import PagesHome from './Home/Home'
import RespostaQuestionario from './RespostaQuestionario/RespostaQuestionario';
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import NavBar from './Components/NavBar/NavBar';
import HomepageRespondente from './HomepageRespondente/Homepage'
import PagesMyFormsList from './MyFormsList/MyFormsList';

const Root = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/myforms" component={PagesMyFormsList} />
          <PrivateRoute exact path="/home" component={PagesHome} />
          <Route exact path="/register" component={PagesRegister} />
          <Route exact path="/" component={PagesLogin} />
          <Route exact path="/homepage" component={HomepageRespondente} />
          <PrivateRoute exact path="/respostaQuestionario" component={RespostaQuestionario} />
          <PrivateRoute component={PagesNotFound} />
        </Switch>
      </Router>
    </>
  );

};

export default Root;
