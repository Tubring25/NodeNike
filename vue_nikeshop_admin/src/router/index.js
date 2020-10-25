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
				hidden: false,
				component: () => import('../views/dashboard/dashboard'),
				meta: { title: '面板1', icon: 'el-icon-menu' },
			}
		]
	},
	{
		path: '/goods',
		name: 'goods',
		redirect: '/goods/goodsList',
		component: Layout,
		meta: { title: '商品管理', icon: 'el-icon-goods' },
		children: [
			{
				path: 'goodsCategory',
				name: 'GoodsCategory',
				hidden: false,
				component: () => import('../views/goodsCategory/goodsCategory'),
				meta: { title: '商品分类', icon: 'el-icon-menu' },
			},
			{
				path: 'goodsList',
				name: 'GoodsList',
				hidden: false,
				component: () => import('@/views/goods/goodsList'),
				meta: { title: '商品列表' }
			},
			{
				path: 'goodsAttribute',
				name: 'GoodsAttribute',
				hidden: false,
				component: () => import('@/views/goods/goodsAttribute/index'),
				meta: { title: '商品属性' },
			},
			{
				path: 'goodsDetail',
				name: 'GoodsDetail',
				hidden: true,
				component: () => import('@/views/goods/goodsDetail'),
				meta: { title: '商品详情' }
			},
			{
				path: 'addGood',
				name: 'AddGood',
				hidden: true,
				component: () => import('../views/goods/addGoods'),
				meta: { title: '添加商品', icon: 'el-icon-menu' }
			},
			{
				path: 'addGoodsSku',
				name: 'AddGoodsSku',
				hidden: true,
				component: () => import('../views/goods/addGoodsSku'),
				meta: { title: '添加商品Sku', icon: 'el-icon-menu' }
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
				hidden: false,
				component: () => import('@/views/activity/banner'),
				meta: { title: 'Banner管理', icon: 'el-icon-box' }
			},
			{
				path: 'story',
				name: 'Story',
				hidden: false,
				component: () => import('@/views/activity/story'),
				meta: { title: "主推故事", icon: 'el-icon-box' }
			}
		]
	}
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
