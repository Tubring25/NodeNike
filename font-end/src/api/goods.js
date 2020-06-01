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
// 获取商品列表
export function getGoods(data) {
  return Axios.get(baseUrl + "goods", {params: data});
}
// 获取热门商品
export function getHotGoods() {
  return Axios.get(baseUrl + "hotGoods");
}
// 获取最新商品
export function getNewGoods() {
  return Axios.get(baseUrl + "newGoods");
}
// 获取单挑商品
export function getSingleGood(data) {
  return Axios.get(baseUrl + 'singleGood', {params: data});
}
// 获取随即商品
export function getRandomGoods() {
  return Axios.get(baseUrl + "randomGoods");
}