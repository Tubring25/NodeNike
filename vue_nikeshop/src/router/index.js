import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/home/home'),
    meta: {private: false}
  },
  {
    path: '/men',
    name: "Home-Men",
    component: () => import('@/views/home/home'),
    meta: {private: false}
  },
  {
    path: '/women',
    name: "Home-Women",
    component: () => import('@/views/home/home'),
    meta: {private: false}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {private: true}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
