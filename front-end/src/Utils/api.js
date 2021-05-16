import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (!config.url.endsWith('/auth')) {
      config.headers['Authorization'] = localStorage.getItem('token');
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const register = (email, password, firstName, creator) => {
  return api.post('/users', {
    email: email,
    password: password,
    password_confirmation: password,
    name: firstName,
    answerer: true,
    creator: creator,
  });
};

export const updateProfile = (email, password, firstName, creator, id) => {
  return api.put(`/users/${id}`, {
    email: email,
    password: password,
    password_confirmation: password,
    name: firstName,
    answerer: true,
    creator: creator,
  });
};


export const sendQuestion = (resposta, idForm, idUser, idQuestion) => {
  return api.post('/answers', {
    respostas: resposta,
    form_id: idForm,
    user_id: idUser,
    question_id: idQuestion
  });
};

export const getFormPerUser = (user_id) => {
  return api.get(`/forms-per-user/${user_id}`);
};

export const deleteForm = (id) => {
  return api.delete(`/forms/${id}`);
};

export const getFormById = (id) => {
  return api.get(`/forms/${id}`);
};

export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

export const sendFeedback = (form_id, user_id, description) => {
  return api.post('/feedbacks', { form_id, user_id, description });
};

export const getFeedbacksById = (form_id, user_id) => {
  return api.get(`/feedback-per-user-and-form/${user_id}/${form_id}`);
};

export const getAllForms = () => {
  return api.get('/forms/');
};

export const getAllUsers = () => {
  return api.get('/users/');
};

export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};

export const getUser = (user_id) => {
  return api.get(`/users/${user_id}`);
};

export const userToForm = (form_id, user_id) => {
  return api.post(`/assignments`, { form_id, user_id });
};

export const getAssignPerUser = (user_id) => {
  return api.get(`/form-assign-to-user/${user_id}`);
};

export const getQuestionario = (questionarioId) => {
  // return api.get(`/questionario/${questionarioId}`);
  return {
    titulo: "Questionario de teste",
    descricao: "Este é um questionário de testes que eu criei para testes. Estou apenas testando!!",
    userName: "rafael.barbosa",
    link: "???",
    perguntas: [
      {
        id: 1,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
        resposta: "Gosta e acha bom!",
      },
      {
        id: 3,
        descricao: "Você gosta? (resposta longa)",
        tipo: "paragrafo",
        dados: [],
        dados: [],
        resposta: "Gosta e acha bom!",
      },
      {
        id: 5,
        descricao: "Sim ou não? (de Schrödinger)",
        tipo: "perguntaSelect",
        dados: [
          {
            opcao: "Sim",
            valor: "s"
          },
          {
            opcao: "Não",
            valor: "n"
          },
        ],
        resposta: "s",
      },
      {
        id: 6,
        descricao: "Qual o horário de nascimento para que o o Sol esteja no ascendente?",
        tipo: "horario",
        dados: []
      },
      {
        id: 7,
        descricao: "Qual a data de nascimento do Mike Tyson?",
        tipo: "data",
        dados: [],
      },
      {
        id: 2,
        descricao: "Sim ou não?",
        tipo: "multiplaEscolha",
        dados: [
          {
            opcao: "Sim",
            valor: "s"
          },
          {
            opcao: "Não",
            valor: "n"
          },
        ],
        resposta: "s"
      },
      {
        id: 4,
        descricao: "Sim ou não? (de Schrödinger)",
        tipo: "caixasDeSelecao",
        dados: [
          {
            opcao: "Sim",
            valor: "s"
          },
          {
            opcao: "Não",
            valor: "n"
          },
        ],
        resposta: ["s"],
      },
    ],
  };
};
