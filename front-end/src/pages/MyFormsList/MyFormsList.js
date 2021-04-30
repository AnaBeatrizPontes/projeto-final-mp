import React, { useState, useEffect } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import NavBar from '../../components/NavBar/NavBar';
import 'normalize.css';
import './MyFormsList.css';

//API
import { getFormPerUser } from '../../Utils/api';

import SearchIcon from '@material-ui/icons/Search';

function PagesMyFormsList() {
  const [forms, setForms] = useState([]);
  const [search, setSearch] = useState('');
  const [listPosition, setListPosition] = useState(1);

  const listID = () => setListPosition(listPosition + 1);

  const params = {};
  if (search) {
    params.title_like = search;
  }

  const { user_id } = useState(localStorage.getItem('id'));

  useEffect(() => {
    getFormPerUser(user_id)
      .then((res) => {
        setForms(res.data);
        console.log(forms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <div className="myFormsList">
      <NavBar />
      <div className="myFormsList__input">
        <input
          type="search"
          placeholder="Buscar questionários feitos por você"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <SearchIcon />
      </div>
      {!(forms.length == 0) ? (
        <div className="caixaDeForms">
          {forms.map(function (form) {
            return <FormCard key={form.id} form={form} />;
          })}
        </div>
      ) : (
        <h1>Voce nao possui quests</h1>
      )}
    </div>
  );
}

export default PagesMyFormsList;
