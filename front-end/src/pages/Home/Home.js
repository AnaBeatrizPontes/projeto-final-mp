import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HomepageCard from '../../components/HomepageCard/HomepageCard';

import './Home.css';

import { getFormPerUser } from '../../Utils/api';

function PagesHome() {
  const admin = localStorage.getItem('admin');
  const name = localStorage.getItem('usrName');
  const user_id = localStorage.getItem('id');
  const [forms, setForms] = useState([]);
  console.log(user_id);
  useEffect(() => {
    getFormPerUser(user_id)
      .then((res) => {
        setForms(res.data);
        console.log(forms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {admin == 'true' ? (
        <>
          <NavBar />
          <div className="pagesHome">
            <h1>Bem vindo admiro</h1>
          </div>
        </>
      ) : (
        <div className="myFormsList">
          <NavBar />
          <div className="pagesHome">
            <h1>Questionários atribuídos a ti:</h1>
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
      )}
    </>
  );
}

export default PagesHome;
