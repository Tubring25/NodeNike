/**
 * api for goods
 */
import Axios from 'axios'
import qs from 'qs'

// 服务器地址
const baseUrl = "http://localhost:3000/goods/";


const goods = {
  // 获取商品分类: 分类(鞋类 | 服饰 | 背包)
  getCategoryType: function () {
    return Axios.get(baseUrl + "categoryType");
  },
  // 获取商品分类: 性别
  getCategoryGender: function () {
    return Axios.get(baseUrl + 'categoryGender')
  },
  // 获取商品分类: 系列
  getCategorySeries: function () {
    return Axios.get(baseUrl + 'categorySeries')
  },
  // 获取轮播图
  getBanner: function () {
    return Axios.get(baseUrl + 'banner')
  }
}

export default goods;