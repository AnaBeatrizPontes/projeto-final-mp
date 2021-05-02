import { useEffect, useState } from 'react';
import NavBarEdicao from '../../components/NavBarEdicao/NavBarEdicao';
import style from './Edicao.module.css';

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Edicao(props) {
  const [objeto, setObjeto] = useState([]);
  const [form, setForm] = useState([]);
  const [salvo, setSalvo] = useState(true);
  //const [titulo, setTitulo] = useState(objeto.titulo)

  useEffect(() => {
    fetch('http://localhost:3333/formularios')
      .then((response) => response.json())
      .then((data) => setObjeto(data));
  }, []);

  return (
    <div>
      <NavBarEdicao titulo="{objeto.titulo}" salvo={salvo} />

      <form className={style.container} noValidate autoComplete="off">
        <div className={style.container_titulo}>
          <div className={style.cor_form} />
          <div className={style.box_titulo}>
            <TextField
              id="standard-basic"
              label="Título"
              value="{titulo}"
              className={style.texto}
              onChange={(ev) => setTitulo(ev.target.value)}
            />

            <TextareaAutosize
              rowsMin={3}
              placeholder="Descrição"
              className={style.descricao}
              onChange={(value) => setSalvo(false)}
            />
          </div>
        </div>

        {objeto.map((question) => {
          return (
            <div className={style.box}>
              <TextField
                id="standard-basic"
                label="Título"
                value={question.titulo}
                className={style.texto}
              />
            </div>
          );
        })}
      </form>

      
    </div>
  );
}
