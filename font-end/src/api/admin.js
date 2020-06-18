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
// 删除商品
export function deleteGoods(data) {
  return Axios.post(baseUrl + "deleteGoods", data);
}
// 删除订单
export function deleteOrder(data) {
  return Axios.post(baseUrl + "deleteOrder", data);
}
// 更新订单
export function updateOrder(data) {
  return Axios.post(baseUrl + "updateOrder", data);
}
// 删除用户
export function deleteUser(data) {
  return Axios.post(baseUrl + "deleteUser", data);
}