import React from 'react';

import { Redirect, Route } from 'react-router';

const PrivateRoute = (props) => {
  const isLogged = !!localStorage.getItem('token');
  const Component = props.component;
  return isLogged ?
    <Route
      render={(props) => (
        <Component {...props} />)
      }
    /> :
    <Redirect to="/login" />;
};

export default PrivateRoute;
