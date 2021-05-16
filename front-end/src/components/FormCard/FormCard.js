import React from 'react';
import './FormCard.css';

//Components
import AssignForms from '../AssignForms/AssignForms';

//ICONS
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { Badge } from '@material-ui/core';
import { deleteForm } from '../../Utils/api';

import { useHistory } from 'react-router-dom';

const FormCard = ({ form }) => {
  const deletaForm = () => {
    deleteForm(form.id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert('Erro ao deletar o questionário');
        console.log('ERRO:', err);
      });
  };

  const history = useHistory();

  const qtdeRespostas = form.answers.length;

  const listaRespostas = () => {
    if (form.answers.length == 0) {
      alert('O form ainda não possui respostas');
      return;
    }
    history.push(`/answers/${form.id}`);
  };

  const urlEdit = form.link;
  const urlCopy = form.link;

  return (
    <div className="card-box" key={form.id}>
      <h1 className="card-box__title">{form.title}</h1>
      <span className="card-box__info">{form.description}</span>
      <footer className="card-box__footer">
        <a>
          <AssignForms formId={form.id} />
        </a>
        <a href={form.link} target="blank" className="card-box__link">
          <AssignmentOutlinedIcon style={{ fontSize: 20 }} />
        </a>
        <button onClick={listaRespostas} className="card-box__answers">
          <Badge
            badgeContent={qtdeRespostas}
            color="primary"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MoveToInboxIcon style={{ fontSize: 20 }} />
          </Badge>
        </button>
        <a href={urlEdit} target="blank" className="card-box__edit">
          <EditIcon style={{ fontSize: 20 }} />
        </a>
        <a href={urlCopy} target="blank" className="card-box__copy">
          <FileCopyIcon style={{ fontSize: 20 }} />
        </a>
        <button onClick={deletaForm} className="card-box__delete">
          <DeleteOutlineIcon style={{ fontSize: 20 }} />
        </button>
      </footer>
    </div>
  );
};

export default FormCard;
