import Vue from 'vue'
import VueRouter from 'vue-router'
import Cinema from '@/router/cinema'
import Mine from '@/router/mine'
import Movie from '@/router/movie'

Vue.use(VueRouter)

const routes = [
  Cinema,
  Mine,
  Movie,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
