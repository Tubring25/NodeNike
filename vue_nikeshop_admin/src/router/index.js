import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from '../layout';

const routes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () =>
      import("../views/login/login.vue")
  },
  {
    path: "/",
    name: 'dashboard',
    redirect: '/dashboard',
    component: Layout,
    meta: {title: '首页', icon: 'el-icon-user'},
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard/dashboard'),
        meta: { title: '面板1', icon: 'el-icon-menu' }
      },
      {
        path: 'about',
        name: 'About', 
        component: () => import('../views/About'),
        meta: {title: '关于1', icon: 'el-icon-menu'}
      }
    ]
  },
  {
    path: "/index",
    name: 'page2',
    redirect: '/index/about',
    component: Layout,
    children: [
      {
        path: 'about',
        name: 'About', 
        component: () => import('../views/About'),
        meta: {title: '关于2', icon: 'el-icon-menu'}
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
