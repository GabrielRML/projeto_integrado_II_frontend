import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.js';
import CadastroView from '@/views/CadastroView.vue';
import Home from '../views/home.vue'
import LoginView from '@/views/LoginView.vue'
import AgendamentoView from '@/views/AgendamentoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pagina Inicial',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/agendamento',
      name: 'agendamento',
      component: AgendamentoView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if(!to.meta.auth) {
    next();
  } else {
    next({ name: 'login'});
  }

  const auth = useAuthStore();
  if(to.meta.auth && auth.token) {
    const isAuthenticated = await auth.checkToken();
    if(!isAuthenticated) {
      next({ name: 'login'});
    }
    next();
  } else {
    next({ name: 'login'});
  }
  next({ name: 'login'});
  // Caso a rota tenha role para acesso
  // if(to.meta.role) {
  //   const { data } = await h
  //   if(auth.user.role !== role) {
  //     next();
  //   }
  // }

})

export default router
