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