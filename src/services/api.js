import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://157.245.215.207',
  baseURL: 'http://localhost:3333',
});

export default api;
