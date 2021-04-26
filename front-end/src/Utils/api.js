import axios from 'axios'

export const api = axios.create({
    baseURL:
        "http://localhost:8080/v1/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        if (!config.url.endsWith("/auth")) {
            config.headers["Authorization"] = localStorage.getItem("token");
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const login = (email, password) => {
    return api.post('/auth', { email, password });
};

export const register = (email, password, firstName, lastName) => {
    return api.post('/user', { email, password, firstName, lastName });
}
