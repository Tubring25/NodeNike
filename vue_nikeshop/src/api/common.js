/**
 * common apis
 */

import request from '@/utils/request';

// 获取商品分类列表
export function getBanner(gender) {
  return request({
    url: '/shop/banner',
    method: "get",
    params: gender,
    private: false
  })
}