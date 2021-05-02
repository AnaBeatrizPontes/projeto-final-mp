import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PrivatePage from './PrivatePage';
import NavBar from '../components/NavBar/NavBar';
import HomepageRespondente from './HomepageRespondente/Homepage'
import PagesMyFormsList from './MyFormsList/MyFormsList';
import PageEdicao from './Edicao/Edicao'

const Root = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/myforms" component={PagesMyFormsList} />
        <Route exact path="/register" component={PagesRegister} />
        <Route exact path="/" component={PagesLogin} />
        <Route exact path="/homepage" component={HomepageRespondente} />
        <Route exact path="/edicao-formulario" component={PageEdicao}/>
        <PrivateRoute component={PagesNotFound} />
      </Switch>
    </Router>
  );

};

export default Root;
