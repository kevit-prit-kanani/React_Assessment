import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token") || "add";
        console.log("config : ", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);