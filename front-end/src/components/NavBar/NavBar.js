import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useHistory } from 'react-router-dom';

import logo from '../../pages/logo.png';
import { Button } from '../Button/Button';

function NavBar() {
  const history = useHistory();
  const creator = localStorage.getItem('creator');

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usrName');
    localStorage.removeItem('id');
    localStorage.removeItem('creator');
    history.push('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
            {creator == 'true' && (
              <li className="nav-item">
                <Link to="/myforms" className="nav-links">
                  My Forms
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/notfound" className="nav-links">
                {localStorage.getItem('usrName')}
              </Link>
            </li>
          </ul>
          <Button buttonStyle="btn--outline" onClick={logOut}>
            Sair
          </Button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
