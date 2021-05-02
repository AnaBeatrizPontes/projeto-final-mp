import React, { useState, useEffect } from 'react';

//CSS
import './Feedbacks.css';

//API
import { sendFeedback, getForm } from '../../Utils/api';

//Material UI
import TextField from '@material-ui/core/TextField';

//////Adicionar logo após o usuário enviar a resposta
//const sendToFeedbackPage = (form_id) => {
//	history.push('/feedback/${form_id}')
//}
//////

function Feedbacks(props) {

	const [feedback, setFeedback] = useState('');
	const user_id = useState(localStorage.getItem('id'));
	const form_id = useState('33');
	// const form_id = props.match.params.id;
	const [form, setForm] = useState('');

	useEffect(() => {
		getForm(form_id)
			.then((res) => {
				setForm(res);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
	}, []);

	const send = (form_id, user_id, feedback) => {
		sendFeedback(form_id, user_id, feedback)
			.then((res) => {
				console.log(res);
				alert("Feedback enviado com sucesso");
			})
			.catch((err) => {
				console.log(err);
				alert("Seu feedback não pode ser enviado, tente novamente mais tarde");
			});
	};

	return (
		<div>
			<div>Feedback sobre o form {form.name}</div>
			<textarea id="outlined-basic" variant="outlined" className="feedback_input" />
		</div>
	);
}

export default Feedbacks;

