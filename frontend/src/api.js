import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/expenses',
});

export default API;
