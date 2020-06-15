/**
 * api from admin
 */

import Axios from "axios";
import qs from "qs";
// 服务器地址
const baseUrl = "http://localhost:3000/admin/";
// 管理员登录
export function login(data) {
  return Axios.post(baseUrl+'login', data)
}
// 获取用户列表
export function getUser(data) {
  return Axios.get(baseUrl + 'userList')
}