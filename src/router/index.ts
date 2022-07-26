import { registerRuntimeCompiler } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginUser from '../views/LoginUser.vue'
import RegisterUser from '../views/RegisterUser.vue'
import PasswordReset from '../views/PasswordReset.vue'
import DashboardHome from '../views/DashboardHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    component: PasswordReset
  },
  {
    path: '/dashboard-home',
    name: 'dashboard-home',
    component: DashboardHome  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
