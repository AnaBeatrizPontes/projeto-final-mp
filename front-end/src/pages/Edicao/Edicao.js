import { useEffect, useState } from 'react';
import NavBarEdicao from '../Components/NavBarEdicao/NavBarEdicao';
import style from './Edicao.module.css'

import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export default function Edicao() {
  const [objeto, setObjeto] = useState([]);
  const [form, setForm] = useState([])
  const [salvo, setSalvo] = useState(true);


  useEffect(() => {
    fetch('http://localhost:3333/formulario')
      .then((response) => response.json())
      .then((data) => setObjeto(data));

      {importarFormulario()}
  }, []);

  function importarFormulario(){
    setForm(objeto)
    {console.log(objeto)}
  }

  
  return (
    <div>
      <NavBarEdicao titulo={objeto.titulo} salvo={salvo}/>
      

      <form className={style.container} noValidate autoComplete="off">
        <div className={style.box_titulo}>
          <TextField id="standard-basic" label="Título" defaultValue={objeto.titulo}  className={style.texto} onChange={(value) => setSalvo(false)}/>
          <TextareaAutosize rowsMin={3} placeholder="Descrição" className={style.descricao} onChange={(value) => setSalvo(false)}/>
          


        </div>
      
    </form>


    </div>
  );
}
