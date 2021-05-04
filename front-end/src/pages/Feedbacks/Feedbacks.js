import React, { useState, useEffect } from 'react';

//CSS
import './Feedbacks.css';

//API
import { sendFeedback, getForm } from '../../Utils/api';

import NavBar from "../../components/NavBar/NavBar";

//////Adicionar logo após o usuário enviar a resposta
//const sendToFeedbackPage = (form_id) => {
//  history.push('/feedback/${form_id}')
//}
//////

function Feedbacks(props) {
  const [feedback, setFeedback] = useState('');
  // const user_id = localStorage.getItem('id');
  const user_id = '2';
  const form_id = '2';
  // const form_id = props.match.params.id;
  const [form, setForm] = useState('');

  useEffect(() => {
    getForm(form_id)
      .then((res) => {
        setForm(res);
        console.log(res);
        setFeedback('');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const send = (form_id, user_id, feedback) => {
    sendFeedback(form_id, user_id, feedback)
      .then((res) => {
        console.log(res);
        alert('Feedback enviado com sucesso');
      })
      .catch((err) => {
        console.log(err);
        alert('Seu feedback não pode ser enviado, tente novamente mais tarde');
      });
  };

	return (
		<>
		<NavBar />
		<div className="all">
      <h1 className="title">Feedback sobre o questionário {form.name}</h1>
      <textarea
        id="outlined-basic"
        variant="outlined"
        className="feedback_input"
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
      />
      <button
        className="button"
        onClick={() => send(form_id, user_id, feedback)}
      >
        <div className="button_text">Enviar Feedback</div>
      </button>
			</div>
			</>
  );
}

export default Feedbacks;
