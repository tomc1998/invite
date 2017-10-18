import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/comp/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/-1',
    },
    {
      path: '/home/:roomID',
      name: 'Home',
      component: Home,
    },
  ]
});

