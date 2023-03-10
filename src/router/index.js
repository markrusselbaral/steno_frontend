import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import User from '../views/UserRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})

export default router
