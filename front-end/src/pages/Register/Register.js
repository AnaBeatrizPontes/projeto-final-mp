import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import { register } from '../../Utils/api';

//Icones
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function PagesRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [flag, setFlag] = useState(false);
  const history = useHistory();

  const mandaEsseTrecoDeVolta = () => {
    history.push('/login');
  };

  const mandaProBack = () => {
    register(email, password, firstName)
      .then((resp) => {
        const { data } = resp;
        if (data) {
          history.push('/');
        }
      })
      .catch((err) => {
        alert('Erro ao cadastrar, confira os dados inseridos');
        setFlag(true);
        console.log(err.message);
      });
  };

  const handleClick = (clickEvent) => {
    clickEvent.preventDefault();
    setShowImage(!showImage);
  };

  return (
    <div className="back">
      <div className="register">
        <div className="register-box">
          <button
            type="button"
            onClick={mandaEsseTrecoDeVolta}
            className="backButton"
          >
            Login
          </button>
          <h1 className="register-titulo">Registrar no App</h1>

          <div className="registerInputName">
            <AccountBoxIcon />
            <input
              className="registerInput"
              type="name"
              placeholder="First name"
              value={firstName}
              onChange={(clickEvent) => setFirstName(clickEvent.target.value)}
            />

            <input
              type="name"
              placeholder="Last name"
              value={lastName}
              onChange={(clickEvent) => setLastName(clickEvent.target.value)}
            />
          </div>

          {flag && firstName.length < 1 && (
            <p className="Error-Message">Insira um nome v??lido</p>
          )}

          <div className="registerInputEmail">
            <ContactMailIcon />
            <input
              type="email"
              placeholder="Digite um email"
              value={email}
              onChange={(clickEvent) => setEmail(clickEvent.target.value)}
            />
          </div>

          {flag && email.length < 1 && (
            <p className="Error-Message">Insira um email v??lido</p>
          )}

          <div className="registerInputPassword">
            <LockIcon />
            <input
              type={showImage ? 'text' : 'password'}
              placeholder="Digite sua senha"
              value={password}
              onChange={(clickEvent) => setPassword(clickEvent.target.value)}
            />

            <div className="register-eye">
              {showImage ? (
                <VisibilityIcon onClick={handleClick} />
              ) : (
                <VisibilityOffIcon onClick={handleClick} />
              )}
            </div>
          </div>

          {flag && password.length < 8 && (
            <p className="Error-Message">
              A senha deve possuir ao menos 8 d??gitos
            </p>
          )}

          <div>
            <button onClick={mandaProBack} className="submitButton">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesRegister;
