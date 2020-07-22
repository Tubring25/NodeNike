// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import router from '../router';

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})