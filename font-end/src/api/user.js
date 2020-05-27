/**
 * api for goods
 */
import Axios from "axios";
import qs from "qs";

// 服务器地址
const baseUrl = "http://localhost:3000/users/";
// 注册
export function register (data) {
  return Axios.post(baseUrl + 'register', data)
}
// 登录
export function login(data) {
  return Axios.post(baseUrl + 'login', data)
}