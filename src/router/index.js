import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainBody from "@/components/MainBody";
import ShoppingList from "@/views/ShoppingList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'Home',
        path: '',
        component: MainBody
      },
      {
        path: 'category',
        name: 'CategoryListing',
        component: ShoppingList
      },
      {
        path: '/detail/:id',
        name: 'ItemDetail',
        component: import(/* webpackChunkName: "item-detail" */ '../views/ItemDetail')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
