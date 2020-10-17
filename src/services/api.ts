import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
  headers:{
    auth:localStorage.getItem('@TOKEN')
  }
})

api.interceptors.request.use(async config => {
  const token = getToken();

  if(token){
    config.headers.auth = token
  }

  return config;
})
export default api;