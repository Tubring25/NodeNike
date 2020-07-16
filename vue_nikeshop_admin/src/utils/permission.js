import store from '../store';
import router from '../router'
// import { Message } from 'element-ui';
import NProgress from 'nprogress';
import { getToken } from '../utils/auth';

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = getToken()
  if(token) {
    if(to.path === '/login') {
      next({path: '/'})
      NProgress.done()
    } else {
      const name = store.getters.name
      if (name) {
        next()
      } else {
        this.$store.dispatch('user/getUserInfo')
        NProgress.done()
      }
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({path: '/login'})
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})