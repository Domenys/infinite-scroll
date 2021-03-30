import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfiniteScroll from '@/components/InfiniteScroll'
import InfiniteScroll2 from '@/components/InfiniteScroll2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/infiniteScroll',
    name: 'InfiniteScroll',
    component: InfiniteScroll
  },
  {
    path: '/infiniteScroll2',
    name: 'InfiniteScroll2',
    component: InfiniteScroll2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
