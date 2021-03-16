import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '../components/login/login.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes:[
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // 添加表示需要验证
  }
]
});

router.beforeEach((to,from,next)=>{
  if(to.path ==='/'){
    next();
  }else {
    let token = localStorage.getItem('Authorization');
    if(token ===null || token ===''){
      next('/');
    }else {
      // alert(localStorage.getItem("Authorization"));
      next();
    }
  }
});

export default router;