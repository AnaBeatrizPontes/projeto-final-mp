import './MaisAtribuidos.style.css';

export default function MaisFormularios({ obj, onClose = () => {} }) {
  const all = obj;

  function montarTabela() {
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
              <a href="#" alt="Formulário">
                {form.titulo}
              </a>
            </td>
          </tr>
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



        <table className="tabela">
          <thead>
            <tr>
              <th>Nome do formulário</th>
            </tr>
          </thead>
          <tbody>{montarTabela()}</tbody>
        </table>
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
