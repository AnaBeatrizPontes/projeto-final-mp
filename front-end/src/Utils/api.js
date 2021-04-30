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
  return api.post('/users', { email, password, firstName });
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
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Sim ou não?",
        tipo: "multiplaEsc",
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
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
      {
        descricao: "Você gosta?",
        tipo: "respCurta",
        dados: [],
      },
    ],
  };
};
