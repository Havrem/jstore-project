import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080', // Api address
  withCredentials: true, // send/receive JSESSIONID cookie
})