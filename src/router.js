import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Ofnew from './views/Ofnew.vue'
import Shop from './views/Shop.vue'
import Me from './views/Me.vue'
import Choosecity from './views/Choosecity.vue'
import Category from './views/Category.vue'

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
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/choosecity',
      name: 'Choosecity',
      component: Choosecity
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
  ]
})
