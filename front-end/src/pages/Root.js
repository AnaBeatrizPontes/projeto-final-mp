import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import PagesLogin from './Login/Login';
import PagesRegister from './Register/Register';
import PagesNotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PagesMyFormsList from './MyFormsList/MyFormsList';
import Feedbacks from './Feedbacks/Feedbacks';

//Utils
import { getUser } from '../Utils/api';

function Root() {

	const initialUser = {
		id: '',
		name: '',
		email: '',
		password_digest: '',
		created_at: '',
		updated_at: '',
		admin: false,
		creator: false,
		answerer: false
	};
	
	const [user, setUser] = useState(initialUser);
	const id = localStorage.getItem("id");

	const [creator, setCreator] = useState(null);
	const [answerer, setAnswerer] = useState(null);
	const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (id != null) {
      getUser(id)
        .then((res) => {
					setUser(res.data);
					console.log("USER", user);
					setCreator(localStorage.getItem('creator'));
					setAnswerer(localStorage.getItem('answerer'));
					setAdmin(localStorage.getItem('admin'));
        })
        .catch((err) => {
          console.log(err);
					setUser(initialUser);
        });
		}
		else {
			setUser(initialUser);
		}
  }, [user]);

	let render;

	if (creator == true && answerer == true) {
		render = (
			<Router>
				<Switch>
					<PrivateRoute exact path="/myforms" component={PagesMyFormsList} />
					<Route exact path="/register" component={PagesRegister} />
					<Route exact path="/login" component={PagesLogin} />
					<PrivateRoute exact path="/feedbacks/:id" component={Feedbacks} />
					<PrivateRoute component={PagesNotFound} />
				</Switch>
			</Router>
		);
	}
	else if (user == initialUser) {
		render = (
			<Router>
				<Route exact path="/register" component={PagesRegister} />
				<Route exact path="/login" component={PagesLogin} />
				<PrivateRoute component={PagesNotFound} />
			</Router>
		);
	}
	else if (admin == true) {
		render = (
			<div>PAGINA DE admin</div>
		);
	}
	else if (answerer == true && creator == false) {
		render = (
			<Router>
				<Switch>
					<Route exact path="/register" component={PagesRegister} />
					<Route exact path="/login" component={PagesLogin} />
					<PrivateRoute exact path="/feedbacks/:id" component={Feedbacks} />
					<PrivateRoute component={PagesNotFound} />
				</Switch>
			</Router>
		);
	}
	else {
		render = (
			<div>TU NÃO É NADA MEU PARCEIRO</div>
		);
	}

	return render;
};

export default Root;
