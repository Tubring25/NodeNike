/**
 * apis for story
 */
import request from '../utils/request';

export function addStory (data) {
  return request({
    url: "/addStory",
    method: 'post',
    data
  })
}