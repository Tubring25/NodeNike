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
  },
  {
    path: '/goodsList',
    name: '商品列表',
    component: () => import('../views/goodsList.vue')
  },
  {
    path: '/shoppingCart',
    name: '购物车',
    component: () => import('../views/shoppingCart.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
