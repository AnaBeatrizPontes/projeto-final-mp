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

export const register = (email, password, firstName) => {
  return api.post('/users', {
    email: email,
    password: password,
    password_confirmation: password,
    name: firstName,
  });
};

export const getFormPerUser = (user_id) => {
  return api.get(`/forms-per-user/${user_id}`, { user_id: user_id });
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
        ]
      },
      {
        id: 3,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 4,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 5,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 6,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 7,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 8,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 9,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 10,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 11,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
      {
        id: 12,
        descricao: "Você gosta?",
        tipo: "respostaCurta",
        dados: [],
      },
    ],
  };
};
