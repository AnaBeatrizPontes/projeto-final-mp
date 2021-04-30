import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
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
  return api.post('/users', { email, password, firstName});
};

export const getFormPerUser = (id) => {
	return api.get('/form-per-user', { user_id: id });
};


