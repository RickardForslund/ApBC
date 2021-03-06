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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/spel',
    name: 'spel',

    component: () =>
      import(/* webpackChunkName: "spel" */ '../views/spel.vue')
  },
  {
    path: '/difficulty',
    name: 'Difficulty',

    component: () =>
        import(/* webpackChunkName: "difficulty" */ '../views/difficulty.vue')
  },
  {
    path: '/baby',
    name: 'baby',

    component: () =>
        import(/* webpackChunkName: "baby" */ '../views/baby.vue')
  },
  {
    path: '/Home',
    name: 'Home',

    component: () =>
        import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/big',
    name: 'big',

    component: () =>
        import(/* webpackChunkName: "Home" */ '../views/big.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
