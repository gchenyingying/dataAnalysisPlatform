import Vue from 'vue'
import Router from 'vue-router'
import usrLogin from '@/components/usrLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'usrLogin',
      component: usrLogin
    }
  ]
})
