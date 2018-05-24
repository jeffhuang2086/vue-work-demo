import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      component: () => import('../views/page-one/index')
    }, {
      path: '/page2',
      component: () => import('../views/page-two/index')
    }, {
      path: '/',
      redirect: '/page1'
    }
  ]
})
