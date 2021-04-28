import './HomepageRespondente.style.css';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import MaisAtribuidos from '../../components/MaisAtribuidos/MaisAtribuidos'
import Opcoes from '../../components/Opcoes/Opcoes'
function App(props) {
  const [objeto, setObjeto] = useState([]);
  const [user, setUser] = useState();
  const [showAtribuidos, setShowAtribuidos] = useState(false);
  const [showOpcoes, setShowOpcoes] = useState(false)
  const last = objeto.slice(0, 2);
  const all = objeto.slice(3, objeto.length);
  useEffect(() => {
    fetch('http://localhost:3333/formularios')
      .then((response) => response.json())
      .then((data) => setObjeto(data));
    fetch('http://localhost:3333/usuario')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  function montarTabela(){

    if(all.length === 0){
      return <tr>
          <td>Sem nada para mostrar</td>
      </tr>
    }else{
      return(
        all.map((form) => {
          return (
            <tr key={form.id}>
              <td>
              <div
                className="corForm"
                style={{ backgroundColor: form.cor }}
              />
            </td>
            <td>
              <a href="#" alt="Formulário">
                {form.titulo}
              </a>
            </td>
            <td>{form.dono}</td>
            <td>23 de Julho</td>
          </tr>
        );
      })
    );
    }
  }

  return (
    <div>
      {showAtribuidos ? <MaisAtribuidos obj={all} onClose={ () => setShowAtribuidos(false)}/> : null}
      <header>
        <img src="./assents/logo.png" alt="Logo" className="logo" />
        <div className="info">
          <button className="opcao" onClick={() => setShowOpcoes(true)}>
            \/
            {showOpcoes ? <Opcoes/> : null}
          </button>
          <h2 className="tituloBranco">Jhon Borges</h2>
        </div>
      </header>

      <main>
        

        
        <div className="cards">
          <h2 className="titulo">Últimos atribuídos</h2>
          <div className="ultimosForm">
            {last.map((form) => {
              return (
                <div key={form.id}>
                  <Card cor={form.cor} titulo={form.titulo} dono={form.dono} />
                </div>
              );
            })}

            <div className="mostar-mais-formularios-atribuidos">
              <a onClick={() => setShowAtribuidos(true)} href="#" className="mostrar-formulario-atribuido">
                <img src="./assents/olho.svg" className="olho"/>
                <h2>Ver mais...</h2>
              </a>
            </div>
          </div>
          

          
          <div className="todosForm">
            <h2 className="titulo">Formulários respondidos</h2>

            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Dono</th>
                  <th>Data de Postagem</th>
                </tr>
              </thead>

              <tbody>
                
                {
                montarTabela()
                }
                

              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;