/**
 * api for order
 */
import Axios from "axios";
// 服务器地址
const baseUrl = "http://localhost:3000/users/";

// 下单
export function buy(data) {
  return Axios.post(baseUrl + "buy", data);
}
// 获取订单
export function getOrder(data) {
  return Axios.post(baseUrl + "getOrder", data);
}