import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')
  },
  {
    path: '/personage/:id',
    name: 'personage',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonageView.vue')
  },
  {
    path: '/favorites',
    name: 'favorite',
    component: () => import(/* webpackChunkName: "about" */ '../views/FavoritesView.vue')
  },
  {
    path: '/regions',
    name: 'regions',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegionsView.vue')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharactersView.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  }
})
export default router
