/**
 * api for cart
 */
import Axios from "axios";
import qs from "qs";
// 服务器地址
const baseUrl = "http://localhost:3000/users/";

// 添加购物车
export function addCart(data) {
  return Axios.post(baseUrl + "addCart", data);
}
// 获取购物车
export function getCart(data) {
  return Axios.post(baseUrl + "getShopCart", data);
}
// 购物车删除
export function deleteCart(data) {
  return Axios.post(baseUrl + "deleteCart", data);
}
