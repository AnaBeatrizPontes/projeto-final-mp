import React, { useState, useEffect } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import NavBar from '../../components/NavBar/NavBar';
import 'normalize.css';
import './MyFormsList.css';

//API
import { getFormPerUser } from '../../Utils/api';

//ICONS
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '../../components/Button/Button';

function PagesMyFormsList() {
  const [forms, setForms] = useState([]);
  const [search, setSearch] = useState('');

  const params = {};
  if (search) {
    params.title_like = search;
  }

  const user_id = localStorage.getItem('id');

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
    <div className="myFormsList">
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
          {forms
            .filter((val) => {
              if (search == '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map(function (form) {
              return <FormCard key={form.id} form={form} />;
            })}
        </div>
      ) : (
        <div>
          <h1>Você não possui questionáios ainda</h1>
          <Button
            className="caixaDeForms-btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Clique aqui para criar
          </Button>
        </div>
      )}
    </div>
  );
}

export default PagesMyFormsList;
