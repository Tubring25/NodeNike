/**
 * apis for banner
 */

import reuqest from '@/utils/request.js';

export function addBanner(data) {
  return reuqest({
    url: '/admin/addBanner',
    method: 'post',
    data
  });
}