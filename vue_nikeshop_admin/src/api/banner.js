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
export function getBanerList(params) {
	return reuqest({
		url: '/admin/bannerList',
		method: 'get',
		params
	});
}
export function deleteBanner (data) {
	return reuqest({
		url: '/admin/deleteBanner',
		method: 'post',
		data: data
	})
}
