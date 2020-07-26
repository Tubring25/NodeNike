import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from '../layout';

const routes = [
	{
		path: '/login',
		name: 'Login',
		hidden: true,
		component: () => import('../views/login/login.vue')
	},
	{
		path: '/',
		name: 'dashboard',
		redirect: '/dashboard',
		component: Layout,
		meta: { title: '首页', icon: 'el-icon-user' },
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('../views/dashboard/dashboard'),
				meta: { title: '面板1', icon: 'el-icon-menu' }
			}
		]
	},
	{
		path: '/goods',
		name: 'goods',
		redirect: '/goods/goodsCategory',
		component: Layout,
		meta: { title: '商品管理', icon: 'el-icon-goods' },
		children: [
			{
				path: 'goodsCategory',
				name: 'GoodsCategory',
				component: () => import('../views/goodsCategory/goodsCategory'),
				meta: { title: '商品分类', icon: 'el-icon-menu' }
			},
			{
				path: 'about1',
				name: 'About1',
				component: () => import('../views/About'),
				meta: { title: '关于1', icon: 'el-icon-menu' }
			}
		]
	},
	{
		path: '/activity',
		redirect: '/activity/banner',
		name: 'Activity',
		component: Layout,
		meta: { title: '活动管理', icon: 'el-icon-box' },
		children: [
			{
				path: 'banner',
				name: 'Banner',
				component: () => import('@/views/activity/banner'),
				meta: { title: 'Banner管理', icon: 'el-icon-box' }
			}
		]
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
