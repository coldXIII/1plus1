import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'VideoView',
    component: () => import('../views/Video.vue'),
  },
  {
    path: '/movies',
    name: 'MoviesView',
    component: () => import('../views/Movies.vue'),
  },
  {
    path: '/schedule',
    name: 'ScheduleView',
    component: () => import('../views/Schedule.vue'),
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
