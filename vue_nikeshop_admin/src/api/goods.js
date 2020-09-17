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
export function getColorList(data) {
  return request({
    url: '/admin/goods/attribute/getColor',
    method: 'post',
    data
  })
}
export function addColor(data) {
  return request({
    url: '/admin/goods/attribute/addColor',
    method: 'post',
    data
  })
}
export function editColor(data) {
  return request({
    url: '/admin/goods/attribute/editColor',
    method: 'post',
    data
  })
}
export function deleteColor (data) {
  return request({
    url: '/admin/godos/attribute/deleteColor',
    method: 'post',
    data
  })
}
export function getSizeList(data) {
  return request({
    url: '/admin/goods/attribute/getSize',
    method: 'post',
    data
  })
}
export function addSize(data){
  return request({
    url: '/admin/goods/attribute/addSize',
    method: 'post',
    data
  })
}
export function editSize(data) {
  return request({
    url: '/admin/goods/attribute/editSize',
    method: 'post',
    data
  })
}
export function delectSize(data) {
  return request({
    url: '/admin/goods/attribute/delectSize',
    method: 'post',
    data
  })
}
