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
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import('../views/dashboard/dashboard'),
        meta: { title: '', icon: 'el-icon-menu' }
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
