import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LayoutPage from '../components/LayoutPage.vue'
import LayoutPage from '@/components/LayoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutPage,
      // component: HomeView
      children: [
        {
          path: '/home',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //post a job
    {
      path: '/postJob',
      name: 'postJob',
      component: LayoutPage,
      redirect: '/postOneJob',
      children: [
        {
          path: '/postOneJob',
          name: 'postOneJob',
          component: () => import('@/views/PostOneJob/PostJobPage.vue')
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
