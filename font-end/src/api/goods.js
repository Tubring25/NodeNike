/**
 * api for goods
 */
import Axios from 'axios'
import qs from 'qs'

// 服务器地址
const baseUrl = "http://localhost:3000/goods/";


// 获取商品分类: 分类(鞋类 | 服饰 | 背包)
export function getCategoryType() {
  return Axios.get(baseUrl + "categoryType");
}
// 获取商品分类: 性别
export function getCategoryGender() {
  return Axios.get(baseUrl + 'categoryGender')
}
// 获取商品分类: 系列
export function getCategorySeries() {
  return Axios.get(baseUrl + 'categorySeries')
}
// 获取轮播图
export function getBanner() {
  return Axios.get(baseUrl + 'banner')
}
export function getGoods() {
  return Axios.get(baseUrl + 'goods')
}
