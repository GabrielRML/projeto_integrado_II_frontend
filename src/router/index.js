import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.js';
import CadastroView from '@/views/CadastroView.vue';
import Home from '../views/home.vue'
import LoginView from '@/views/LoginView.vue'
import ProfissionaisView from '@/views/ProfissionaisView.vue';
import TelaDeAvaliacaoView from '@/views/TelaDeAvaliacaoView.vue';
import SupervisorView from '@/views/SupervisorView.vue';

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
      path: '/profissionais',
      name: 'profissionais',
      component: ProfissionaisView
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: TelaDeAvaliacaoView
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: SupervisorView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router
