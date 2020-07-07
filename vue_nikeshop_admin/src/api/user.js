import Axios from 'axios'
const baseUrl = 'http://localhost:3000';

export function login(data) {
  return Axios.post(baseUrl+'/admin/login', data)  
}