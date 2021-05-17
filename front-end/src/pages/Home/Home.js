import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HomepageCard from '../../components/HomepageCard/HomepageCard';
import HomepageCardRespondido from '../../components/HomepageCard/HomepageCardRespondido';

import './Home.css';

import { getAssignPerUser, getAnswersPerUser } from '../../Utils/api';

function PagesHome() {
  const admin = localStorage.getItem('admin');
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
  }, []);

  useEffect(() => {
    getAnswersPerUser(user_id)
      .then((res) => {
        setForms(res.data);
      })
      .catch((err) => {
        console.log("Não foi possivel pegar os forms", err);
      });
  }, []);

  const turnUnic = () => {
    var vetorUnico = [];
    forms.map((ques) => {
      const vetorDeIds = vetorUnico.map((q) => {
        return q.form_id;
      })
      if (!vetorDeIds.includes(ques.form_id, 0)) {
        vetorUnico = [...vetorUnico, ques];
      }
    })
    return vetorUnico;
  }

  return (
    <>
      {admin == 'true' ? (
        <>
          <NavBar />
          <div className="pagesHome">
            <h1>Você está logado como admin</h1>
            <p>Utilize o menu superior</p>
          </div>
        </>
      ) : (
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
                {turnUnic().map(function (form) {
                  return (
                    <HomepageCardRespondido className="item" key={form.form_id} form_id={form.form_id} />
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
      )}
    </>
  );
}

export default PagesHome;
