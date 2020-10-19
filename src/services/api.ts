import axios from 'axios';
const getToken = () => localStorage.getItem('@TOKEN')

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