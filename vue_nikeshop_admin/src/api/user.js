import Axios from 'axios'
const baseUrl = 'http://localhost:6741';

export function login(data) {
  return Axios.post(baseUrl+'/admin/login', data)  
}