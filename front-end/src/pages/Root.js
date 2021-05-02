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
import PagesMyFormsList from './MyFormsList/MyFormsList';
import Feedbacks from './Feedbacks/Feedbacks';

const Root = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/myforms" component={PagesMyFormsList} />
          <Route exact path="/register" component={PagesRegister} />
          <Route exact path="/" component={PagesLogin} />
          <Route exact path="/feedbacks/:id" component={Feedbacks} />
          <PrivateRoute exact path="/home" component={HomepageRespondente} />
          <PrivateRoute
            exact
            path="/respostaQuestionario"
            component={RespostaQuestionario}
          />
          <PrivateRoute component={PagesNotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;
