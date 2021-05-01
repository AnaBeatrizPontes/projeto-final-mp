import React, { useState, useEffect } from 'react';
import FormCard from '../Components/FormCard/FormCard';
import NavBar from '../Components/NavBar/NavBar';
import 'normalize.css';
import style from './MyFormsList.css';
import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';

function PagesMyFormsList() {
  const [forms, setForms] = useState([]);
  const [search, setSearch] = useState('');

  const params = {};
  if (search) {
    params.title_like = search;
  }

  useEffect(() => {
    axios.get('http://localhost:5000/forms', { params }).then((resp) => {
      setForms(resp.data);
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
      <div className="caixaDeForms">
        {forms.map((forms) => (
          <FormCard form={forms} />
        ))}
      </div>
    </div>
  );
}

export default PagesMyFormsList;
