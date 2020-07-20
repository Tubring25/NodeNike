import request from '../utils/request';

export function getGoodsType(data) {
  return request({
    url: '/admin/goods/getGoodsType',
    method: 'POST',
    data
  })
}
export function editGoodsType (data) {
  return request({
    url: "/admin/goods/editType",
    method: 'post',
    data
  })
}
export function deleteGoodsType (data) {
  return request({
    url: '/admin/goods/deleteType',
    method: 'post',
    data
  })
}