import React from 'react';
import './FormCard.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const FormCard = ({ form }) => {
  return (
    <div className="card-box">
      <h1 className="card-box__title">{form.title}</h1>
      <span className="card-box__info">{form.description}</span>
      <footer card-box__footer>
        <a href={form.link} target="blank" className="card-box__link">
          Abrir Questionário
        </a>
        <a href={form.link} target="blank" className="card-box__delete">
          <DeleteOutlineIcon />
        </a>
      </footer>
    </div>
  );
};

export default FormCard;
