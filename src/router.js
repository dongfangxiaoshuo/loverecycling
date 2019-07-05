import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Ofnew from './views/Ofnew.vue'
import Shop from './views/Shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ofnew',
      name: 'Ofnew',
      component: Ofnew
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
  ]
})
