import React from 'react';
import './FormCard.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

const FormCard = ({ form }) => {
  return (
    <div className="card-box" key={form.id}>
      <h1 className="card-box__title">{form.title}</h1>
      <span className="card-box__info">{form.description}</span>
      <footer className="card-box__footer">
        <a href={form.link} target="blank" className="card-box__link">
          <AssignmentOutlinedIcon style={{ fontSize: 20 }} />
        </a>
        <a href={form.link} target="blank" className="card-box__answers">
          <MoveToInboxIcon style={{ fontSize: 20 }} />
        </a>
        <a href={form.link} target="blank" className="card-box__edit">
          <EditIcon style={{ fontSize: 20 }} />
        </a>
        <a href={form.link} target="blank" className="card-box__copy">
          <FileCopyIcon style={{ fontSize: 20 }} />
        </a>
        <a href={form.link} target="blank" className="card-box__delete">
          <DeleteOutlineIcon style={{ fontSize: 20 }} />
        </a>
      </footer>
    </div>
  );
};

export default FormCard;
