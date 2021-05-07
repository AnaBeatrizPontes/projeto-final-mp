import React from 'react';

//ICONS
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import { getUserById } from '../../Utils/api';
import { format } from 'prettier';

const AnswererCard = ({ answer }) => {
  return (
    <div className="card-box" key={answer.id}>
      <h1>essa bosta</h1>
      <h1 className="card-box__title">{answer.user_id}</h1>
      <span className="card-box__info">{answer.respostas}</span>
      <footer className="card-box__footer">
        <a href={answer.link} target="blank" className="card-box__link">
          <AssignmentOutlinedIcon style={{ fontSize: 20 }} />
        </a>
        <a href={answer.link} target="blank" className="card-box__answers">
          <MoveToInboxIcon style={{ fontSize: 20 }} />
        </a>
      </footer>
    </div>
  );
};

export default AnswererCard;
