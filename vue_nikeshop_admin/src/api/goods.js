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
    url: '/admin/goods/attribute/deleteColor',
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
export function deleteSize(data) {
  return request({
    url: '/admin/goods/attribute/deleteSize',
    method: 'post',
    data
  }) 
}

export function getMaterialList(data) {
  return request({
    url: '/admin/goods/attribute/getMaterial',
    method: 'post',
    data
  })
}
export function addMaterial(data){
  return request({
    url: '/admin/goods/attribute/addMaterial',
    method: 'post',
    data
  })
}
export function editMaterial(data) {
  return request({
    url: '/admin/goods/attribute/editMaterial',
    method: 'post',
    data
  })
}
export function deleteMaterial(data) {
  return request({
    url: '/admin/goods/attribute/deleteMaterial',
    method: 'post',
    data
  }) 
}

export function getSpecialList(data) {
  return request({
    url: '/admin/goods/attribute/getSpecial',
    method: 'post',
    data
  })
}
export function addSpecial(data){
  return request({
    url: '/admin/goods/attribute/addSpecial',
    method: 'post',
    data
  })
}
export function editSpecial(data) {
  return request({
    url: '/admin/goods/attribute/editSpecial',
    method: 'post',
    data
  })
}
export function deleteSpecial(data) {
  return request({
    url: '/admin/goods/attribute/deleteSpecial',
    method: 'post',
    data
  }) 
}

export function getTechniqueList(data) {
  return request({
    url: '/admin/goods/attribute/getTechnique',
    method: 'post',
    data
  })
}
export function addTechnique(data){
  return request({
    url: '/admin/goods/attribute/addTechnique',
    method: 'post',
    data
  })
}
export function editTechnique(data) {
  return request({
    url: '/admin/goods/attribute/editTechnique',
    method: 'post',
    data
  })
}
export function deleteTechnique(data) {
  return request({
    url: '/admin/goods/attribute/deleteTechnique',
    method: 'post',
    data
  }) 
}

export function getSuitwayList(data) {
  return request({
    url: '/admin/goods/attribute/getSuitway',
    method: 'post',
    data
  })
}
export function addSuitway(data){
  return request({
    url: '/admin/goods/attribute/addSuitway',
    method: 'post',
    data
  })
}
export function editSuitway(data) {
  return request({
    url: '/admin/goods/attribute/editSuitway',
    method: 'post',
    data
  })
}
export function deleteSuitway(data) {
  return request({
    url: '/admin/goods/attribute/deleteSuitway ',
    method: 'post',
    data
  }) 
}