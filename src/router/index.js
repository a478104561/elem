import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Seller from '@/components/seller'
import Ratings from '@/components/ratings'
import Goods from '@/components/goods'
import Goodinfo from '@/components/goodinfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: '/goods/goodinfo/:id',
          component: Goodinfo
        }
      ]
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})
