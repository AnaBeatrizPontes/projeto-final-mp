import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import RespostaQuestionario from './RespostaQuestionario/RespostaQuestionario';
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PrivatePage from './PrivatePage';
import NavBar from '../components/NavBar/NavBar';
import HomepageRespondente from './HomepageRespondente/Homepage'
import PagesMyFormsList from './MyFormsList/MyFormsList';

const Root = () => {

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/myforms" component={PagesMyFormsList} />
        <Route exact path="/register" component={PagesRegister} />
        <Route exact path="/login" component={PagesLogin} />
        <PrivateRoute
          exact path="/respostaQuestionario"
          component={RespostaQuestionario}
          ehResposta={false}
        />
        <PrivateRoute component={PagesNotFound} />
      </Switch>
    </Router>
  );

};

export default Root;
