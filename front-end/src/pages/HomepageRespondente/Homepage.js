import style from './HomepageRespondente.module.css';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import MaisAtribuidos from '../../components/MaisAtribuidos/MaisAtribuidos';
import Opcoes from '../../components/Opcoes/Opcoes';
import FormCardList from '../../components/FormCardList/FormCardList';
import Menu from '../../components/Menu/Menu';

import { useHistory } from 'react-router-dom';
import axios from 'axios';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';

function HomepageRespondente(props) {
  const [objeto, setObjeto] = useState([]);
  const [user, setUser] = useState();
  const [showAtribuidos, setShowAtribuidos] = useState(false);
  const [showOpcoes, setShowOpcoes] = useState(false);
  const last = objeto.slice(0, 3);
  const all = objeto.slice(3, objeto.length);
  const history = useHistory();

  const [search, setSearch] = useState('');

  function mandaEdicao() {
    return history.push('/edicao-formulario', objeto);
  }

  useEffect(() => {
    axios.get('http://localhost:3333/formularios').then((resp) => {
      setObjeto(resp.data);
    });
  }, []);

 

  function montarTabela() {
    if (all.length === 0) {
      return <div>oi</div>;
    } else {
      return all.map((form) => {
        return (
          <div key={form.id}>
            <FormCardList form={form} />
          </div>
        );
      });
    }
  }

  function handleClick() {
    if (showOpcoes) {
      setShowOpcoes(false);
    } else {
      setShowOpcoes(true);
    }
  }

  return (
    <div>
      {showAtribuidos ? (
        <MaisAtribuidos obj={all} onClose={() => setShowAtribuidos(false)} />
      ) : null}
      <header>
        <img src="./assents/logo.png" alt="Logo" className={style.logo} />
        <div className={style.info}>
          <button className={style.opcao}>
            {showOpcoes ? (
              <ExpandLessIcon className={style.seta} onClick={handleClick} />
            ) : (
              <ExpandMoreIcon className={style.seta} onClick={handleClick} />
            )}
            {showOpcoes ? <Menu /> : null}
          </button>
          <h2 className={style.tituloBranco}>Jhon Borges</h2>
        </div>
      </header>

      <a onClick={mandaEdicao}>Não clique aqui</a>

      <main onClick={() => setShowOpcoes(false)}>
        <div className={style.cards}>
          <h2 className={style.titulo}>Últimos atribuídos</h2>
          <div className={style.ultimosForm}>
            {last.map((form) => {
              return (
                <div key={form.id}>
                  <Card cor={form.cor} titulo={form.titulo} dono={form.dono} />
                </div>
              );
            })}

            <div className={style.mostar_mais_formularios_atribuidos}>
              <a
                onClick={() => setShowAtribuidos(true)}
                href="#"
                className={style.mostrar_formulario_atribuido}
              >
                <img src="./assents/olho.svg" className={style.olho} />
                <h2>Ver mais...</h2>
              </a>
            </div>
          </div>

          <div className={style.todosForm}>
            <h2 className={style.titulo}>Formulários respondidos</h2>

            <div className="myFormsList__input">
              <input
                type="search"
                placeholder="Buscar questionários feitos por você"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
              />
              <SearchIcon />
            </div>

            {montarTabela()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomepageRespondente;
