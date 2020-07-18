import request from '../utils/request';

export function getGoodsGenderType(data) {
  return request({
    url: '/admin/goods/getGoodsGenderType',
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