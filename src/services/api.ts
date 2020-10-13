import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:3333',
  headers:{
    auth:localStorage.getItem('@TOKEN')
  }
})
export default api;