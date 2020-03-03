import axios from 'axios';
const url ='http://localhost:5000'
export const apiLogin = request_data=> {
  return axios.post(url +'/api/v1/auth', request_data);
};

