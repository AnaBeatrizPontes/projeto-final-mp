import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './NavBarEdicao.module.css';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import logo from '../../Login/logo.png';


function NavBarEdicao(props) {
  const history = useHistory();


  return (
    <div className={style.navbaredicao}>
      <ArrowBackIcon className={style.voltar} onClick={history.goBack}/>
      <div className={style.container}>
        <h1 className={style.titulo}>
          {props.titulo} | {props.salvo ? 'Salvo' : 'Não salvo'}
        </h1>
      </div>
      <Button
        variant="contained"
        color="primary"
        className={style.compartilhar}
      >
        Salvar
      </Button>
    </div>
  );
}

export default NavBarEdicao;
