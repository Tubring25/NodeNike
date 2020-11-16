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
    url: '/admin/goods/attribute/deleteSuitway',
    method: 'post',
    data
  }) 
}

export function getLengthList(data) {
  return request({
    url: '/admin/goods/attribute/getClothLength',
    method: 'post',
    data
  })
}
export function addLength(data){
  return request({
    url: '/admin/goods/attribute/addClothLength',
    method: 'post',
    data
  })
}
export function editLength(data) {
  return request({
    url: '/admin/goods/attribute/editClothLength',
    method: 'post',
    data
  })
}
export function deleteLength(data) {
  return request({
    url: '/admin/goods/attribute/deleteClothLength',
    method: 'post',
    data
  }) 
}

export function getShoeSportsStar(data) {
  return request({
    url: '/admin/goods/attribute/getShoeSportsStar',
    method: 'post',
    data
  })
}
export function addShoeSportsStar(data){
  return request({
    url: '/admin/goods/attribute/addShoeSportsStar',
    method: 'post',
    data
  })
}
export function editShoeSportsStar(data) {
  return request({
    url: '/admin/goods/attribute/editShoeSportsStar',
    method: 'post',
    data
  })
}
export function deleteShoeSportsStar(data) {
  return request({
    url: '/admin/goods/attribute/deleteShoeSportsStar',
    method: 'post',
    data
  }) 
}

export function getShoeHeight(data) {
  return request({
    url: '/admin/goods/attribute/getShoeHeight',
    method: 'post',
    data
  })
}
export function addShoeHeight(data){
  return request({
    url: '/admin/goods/attribute/addShoeHeight',
    method: 'post',
    data
  })
}
export function editShoeHeight(data) {
  return request({
    url: '/admin/goods/attribute/editShoeHeight',
    method: 'post',
    data
  })
}
export function deleteShoeHeight(data) {
  return request({
    url: '/admin/goods/attribute/deleteShoeHeight',
    method: 'post',
    data
  }) 
}

export function getShoeGroundType(data) {
  return request({
    url: '/admin/goods/attribute/getShoeGroundType',
    method: 'post',
    data
  })
}
export function addShoeGroundType(data){
  return request({
    url: '/admin/goods/attribute/addShoeGroundType',
    method: 'post',
    data
  })
}
export function editShoeGroundType(data) {
  return request({
    url: '/admin/goods/attribute/editShoeGroundType',
    method: 'post',
    data
  })
}
export function deleteShoeGroundType(data) {
  return request({
    url: '/admin/goods/attribute/deleteShoeGroundType',
    method: 'post',
    data
  }) 
}

export function getTempGoodsId(data) {
  return request({
    url: '/admin/goods/add/tempId', 
    method: 'post',
    data
  })
}

export function addGoodsSkuImg (data) {
  return request({
    url: '/admin/goods/addSkuImg',
    method: 'post',
    data
  })
}

export function addGoodsId (data) {
  return request({
    url: '/admin/goods/addGoodsId',
    method: 'post',
    data
  })
}
export function getGoodsList(data) {
  return request({
    url: '/admin/goods/getGoodsList',
    method: 'post', 
    data
  })
}