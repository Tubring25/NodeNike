import request from '../utils/request';

export function getGoodsGenderType() {
  request({
    url: '/goods/getGoodsGenderType',
    type: 'post'
  })
}