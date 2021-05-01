import React from 'react';
import style from './FormCardList.module.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

const FormCard = ({ form }) => {
  return (
    <div className={style.card_box} key={form.id}>
      <h1 className={style.card_box__title}>{form.title}</h1>
      <span className={style.card_box__info}>{form.dono}</span>
      <footer className={style.card_box__footer}>
        <a href="#" target="blank" className={style.card_box__link}>
          <AssignmentOutlinedIcon style={{ fontSize: 20 }} />
        </a>
        <a href="#" target="blank" className={style.card_box__edit}>
          <EditIcon style={{ fontSize: 20 }} />
        </a>
        <a href="#" target="blank" className={style.card_box__copy}>
          <FileCopyIcon style={{ fontSize: 20 }} />
        </a>
        <a href="#" target="blank" className={style.card_box__delete}>
          <DeleteOutlineIcon style={{ fontSize: 20 }} />
        </a>
      </footer>
    </div>
  );
};

export default FormCard;
