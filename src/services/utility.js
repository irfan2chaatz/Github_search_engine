import axios from "axios";
// const GITHUB_TOKEN = 'irfan.i.ahmed@gmail.com';

const GITHUB_INSTANCE = axios.create({
  baseURL: "https://api.github.com",
});

GITHUB_INSTANCE.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default GITHUB_INSTANCE;