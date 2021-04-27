import React from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';

function PagesHome() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <div className="pagina">
      <h1>HOME PAGE</h1>
      <button onClick={logOut}>Sair</button>
    </div>
  );
}

export default PagesHome;
