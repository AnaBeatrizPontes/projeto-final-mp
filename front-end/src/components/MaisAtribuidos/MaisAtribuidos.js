import './MaisAtribuidos.style.css';
import FormCardList from '../../components/FormCardList/FormCardList'

export default function MaisFormularios({ obj, onClose = () => {} }) {
  const all = obj;

  function montarTabela() {
    if (all.length === 0) {
      return (
        <div>oi</div>
      );
    } else {
      return all.map((form) => {
        return (
          <div key={form.id}>
            <FormCardList form={form}/>
          </div>
        );
      });
    }
  }

  return (
    <div className="container">

      <div className="container-atribuidos">
        <a onClick={onClose}>
          <img src="./assents/fechar.svg" className="fechar"/>
        </a>



        
          {montarTabela()}
      </div>
    </div>
  );
}

/* function montarTabela() {
    if (all.length === 0) {
      return (
        <tr>
          <td>Sem nada para mostrar</td>
        </tr>
      );
    } else {
      return all.map((form) => {
        return (
          <tr key={form.id}>
            <td>
              <div className="corForm" style={{ backgroundColor: form.cor }} />
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
      });
    }
  } */
