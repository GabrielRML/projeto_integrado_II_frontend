import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.js';
import CadastroView from '@/views/CadastroView.vue';
import TelaInicialView from '@/views/TelaInicialView.vue';
import LoginView from '@/views/LoginView.vue'
import EspecialistasView from '@/views/EspecialistasView.vue';
import SupervisionadoView from '@/views/SupervisionadoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pagina Inicial',
      component: TelaInicialView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastroView
    },
    {
      path: '/especialistas',
      name: 'Especialistas',
      component: EspecialistasView
    },
    {
      path: '/supervisionados',
      name: 'Supervisionados',
      component: SupervisionadoView
    },
    {
      path: '/avaliacao',
      name: 'Avaliação',
      component: () => import('@/views/AvaliacaoView.vue')
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
