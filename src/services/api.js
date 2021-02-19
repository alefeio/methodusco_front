import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.131.87.127',
  // baseURL: 'http://localhost:3333',
});

export default api;
