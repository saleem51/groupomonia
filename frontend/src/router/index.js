import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/connexion.vue')
  
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
