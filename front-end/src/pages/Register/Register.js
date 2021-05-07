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

//teste para checkbox
import { FormControlLabel, FormControl, FormGroup, Checkbox, RadioGroup } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Radio from '@material-ui/core/Radio';

function PagesRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [flag, setFlag] = useState(false);
  const history = useHistory();

  //teste para checkbox
  const [value, setValue] = useState('Responder');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

            <FormGroup className="register-user-type">
              <RadioGroup name="UserType" value={value} onChange={handleChange}>
                <FormControlLabel
                  control={<Radio icon={<QuestionAnswerOutlinedIcon style={{ fontSize: 20 }} />} checkedIcon={<QuestionAnswerIcon style={{ color: "#00924c", fontSize: 20 }} />} name="checkedA" />}
                  value="Responder"
                  label="Responder"
                />
                <FormControlLabel
                  control={<Radio icon={<CreateTwoToneIcon style={{ fontSize: 20 }} />} checkedIcon={<CreateIcon style={{ color: "#00924c", fontSize: 20 }} />} name="checkedB" />}
                  value="CriarEresponder"
                  label="Criar e Responder"
                />
              </RadioGroup>
            </FormGroup>

          </div>
          {flag && firstName.length < 1 && (
            <p className="Error-Message">Insira um nome válido</p>
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
            <p className="Error-Message">Insira um email válido</p>
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
              A senha deve possuir ao menos 8 dígitos
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
