import { createRouter, createWebHistory } from 'vue-router'
import Login from '../login.vue'
import Cadastro from '../views/cadastroUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastroUser',
      name: 'cadastroUser',
      component: Cadastro
    }
  ]
})

export default router
