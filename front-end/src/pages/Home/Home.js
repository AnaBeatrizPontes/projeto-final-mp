import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HomepageCard from '../../components/HomepageCard/HomepageCard';

import './Home.css';

import { getFormPerUser, getAssignPerUser } from '../../Utils/api';

function PagesHome() {
  const name = localStorage.getItem('usrName');
  const user_id = localStorage.getItem('id');
  const [forms, setForms] = useState([]);
  const [assigns, setAssigns] = useState([]);

  useEffect(() => {
    getAssignPerUser(user_id)
      .then((res) => {
        setAssigns(res.data);
        console.log('ASSIGNS AQUI', assigns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id, assigns]);

  return (
    <div className="myFormsList">
      <NavBar />
      <div className="pagesHome">
        <h1>Questionários atribuídos a ti:</h1>
        {!(assigns.length == 0) ? (
          <div className="homeForms">
            {assigns.map(function (assign) {
              return (
                <HomepageCard
                  className="item"
                  key={assign.form_id}
                  form_id={assign.form_id}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p>Você não possui questionáios atribuídos ainda</p>
          </div>
        )}
        <h1>Questionários Respondidos:</h1>
        {!(forms.length == 0) ? (
          <div className="homeForms">
            {forms.map(function (form) {
              return (
                <HomepageCard className="item" key={form.id} form={form} />
              );
            })}
          </div>
        ) : (
          <div>
            <p>Não há questionários a serem mostrados aqui :(</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PagesHome;
