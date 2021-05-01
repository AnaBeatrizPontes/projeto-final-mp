import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
<<<<<<< HEAD
=======
import PagesHome from './Home/Home'
import RespostaQuestionario from './RespostaQuestionario/RespostaQuestionario';
>>>>>>> d8c6d4e9f0ddd2f97ecab6c0eef728c48436e117
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
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
<<<<<<< HEAD
        <Route exact path="/edicao-formulario" component={PageEdicao}/>
=======
        <PrivateRoute exact path="/respostaQuestionario" component={RespostaQuestionario} />
>>>>>>> d8c6d4e9f0ddd2f97ecab6c0eef728c48436e117
        <PrivateRoute component={PagesNotFound} />
      </Switch>
    </Router>
  );

};

export default Root;
