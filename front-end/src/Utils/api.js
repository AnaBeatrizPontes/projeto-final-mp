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

export const getMyAnswers = () => {
  return api.get('/answers');
};

export const getUser = (user_id) => {
  return api.get(`/users/${user_id}`);
};

export const getAllUsers = () => {
  return api.get(`/users`);
};

export const userToForm = (form_id, user_id) => {
  return api.post(`/assignments`, { form_id, user_id });
};

export const getAssignPerUser = (user_id) => {
  return api.get(`/form-assign-to-user/${user_id}`);
};
