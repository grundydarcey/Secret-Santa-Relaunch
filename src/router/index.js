import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: function () {
      return import('../views/Wishlist.vue')
    }
  },
  {
    path: '/group',
    name: 'Group',
    component: function () {
      return import('../views/Group.vue')
    }
  },
  {
    path: '/wishlists/your_list',
    name: 'Personal List',
    component: function () {
      return import('../views/PersonalList.vue')
    }
  },
  {
    path: '/wishlists/couples_list',
    name: 'Couples List',
    component: function () {
      return import('../views/CoupleList.vue')
    }
  },
  {
    path: '/join',
    name: 'Join Group',
    component: function () {
      return import('../views/Join.vue')
    }
  },
  {
    path: '/member/:id',
    name: 'Person',
    component: function() {
      return import('../views/Person.vue')
    }
  }
 
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
