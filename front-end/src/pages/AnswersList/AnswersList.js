import React, { useState, useEffect } from 'react';
import AnswererCard from '../../components/AnswererCard/AnswererCard';
import NavBar from '../../components/NavBar/NavBar';
import 'normalize.css';
import './AnswersList.css';
import axios from 'axios';
import useConstructor from '../../Utils/useConstructor';

//API
import { getFormById } from '../../Utils/api';
import { useParams } from 'react-router';

function PagesAnswersList() {
  const { id } = useParams();
  const [form, setForm] = useState({});

  useConstructor(() => {
    axios.get(`http://localhost:3000/forms/${id}`)
      .then((res) => {
        setForm(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //useConstructor(() => {
  //  getFormById(id)
  //    .then((res) => {
  //      setForm(res.data);
  //    })
  //    .catch((err) => {
  //      console.log(err);
  //    });
  //});

  console.log(form);

  return (
    <div className="myFormsList">
      <NavBar />
      <div className="myFormsList__input">
        {/*!(form.answers.length == 0) ? (
          <div className="caixaDeForms">
            {form.answers
              .map(function (answer) {
                return <AnswererCard key={form.answer.id} answer={answer} />;
              })}
          </div>
        ) : (
          <div>
            <h1>Este quest ainda nao possui respostas</h1>
          </div>
        )*/
          <h1>{form.answers[0].respostas}</h1>
        }
      </div>
    </div>
  );
}

export default PagesAnswersList;
