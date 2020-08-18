/**
 * apis for story
 */
import request from '../utils/request';

export function addStory (data) {
  return request({
    url: "/admin/addStory",
    method: 'post',
    data
  })
}
export function getStory (data) {
  return request({
    url: '/admin/storyList',
    method: 'get',
    params: data
  })
}
export function editStory (data) {
  return request({
    url: '/admin/editStory',
    method: 'post',
    data
  })
}
export function deleteStory (data) {
  return request({
    url: '/admin/deleteStory',
    method: 'post',
    data
  })
}