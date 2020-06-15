import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/goodsDetail",
    name: "GoodsDetail",
    component: () => import("../views/goodsDetail.vue")
  },
  {
    path: "/user",
    name: "个人中心",
    component: () => import("../views/user.vue")
  },
  {
    path: "/goodsList",
    name: "商品列表",
    component: () => import("../views/goodsList.vue")
  },
  {
    path: "/shoppingCart",
    name: "购物车",
    component: () => import("../views/shoppingCart.vue")
  },
  {
    path: "/buy",
    name: "下单",
    component: () => import("../views/buy.vue")
  },
  {
    path: "/myOrder",
    name: "我的订单",
    component: () => import("../views/myOrder.vue")
  },
  {
    path: "/adminLogin",
    name: "后台登录",
    component: () => import("../views/adminLogin.vue")
  },
  {
    path: "/admin",
    name: "后台首页",
    component: () => import("../views/admin.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
