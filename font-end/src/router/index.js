import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: () => import('../views/goodsDetail.vue'),
  },
  {
    path: '/user',
    name: '个人中心',
    component: () => import('../views/user.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
