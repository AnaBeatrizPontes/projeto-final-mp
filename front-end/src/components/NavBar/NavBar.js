/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useHistory } from 'react-router-dom';

import logo from '../../pages/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '../Button/Button';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true);

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
		localStorage.removeItem('usrName');
		localStorage.removeItem('id');
    history.push('/');
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => setShowMenu(!showMenu);

  const closeMobileMenu = () => setShowMenu(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="menu-icon">
            {showMenu ? (
              <CloseIcon onClick={handleClick} />
            ) : (
              <MenuIcon onClick={handleClick} />
            )}
          </div>
          <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/notfound"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myforms"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Forms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/respostaQuestionario"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {localStorage.getItem('usrName')}
                Teste perguntas
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" onClick={logOut}>
              Sair
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
