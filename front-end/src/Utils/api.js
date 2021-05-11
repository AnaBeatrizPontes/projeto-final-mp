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

export const register = (email, password, firstName, answerer, creator) => {
	console.log("USERES",answerer, creator)
  return api.post('/users', {
    email: email,
    password: password,
    password_confirmation: password,
    name: firstName,
    answerer: answerer,
    creator: creator
  });
};

export const getFormPerUser = (user_id) => {
  return api.get(`/forms-per-user/${user_id}`);
};

export const deleteForm = (id) => {
  return api.delete(`/forms/${id}`);
};

export const sendFeedback = (form_id, user_id, description) => {
  return api.post('/feedbacks', { form_id, user_id, description });
};

export const getForm = (form_id) => {
  return api.get(`/forms/${form_id}`);
};
