import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth.js';
import CadastroView from '@/views/CadastroView.vue';
import Home from '../views/Home.vue';
import LoginView from '@/views/LoginView.vue';
import AgendamentoView from '@/views/AgendamentoView.vue';
import TelaDeAvaliacaoView from '@/views/TelaDeAvaliacaoView.vue';
import SupervisorView from '@/views/SupervisorView.vue';
import ConfiguracoesView from '@/views/ConfiguracoesView.vue';
import ConsultasView from '@/views/ConsultasView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'Pagina Inicial',
      component: Home,
      meta: { auth: true },
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
      meta: { auth: true },
    },
    {
      path: '/agendamento',
      name: 'agendamento',
      component: AgendamentoView,
      meta: { auth: true },
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: TelaDeAvaliacaoView,
      meta: { auth: true },
    },
    {
      path: '/supervisor',
      name: 'supervisor',
      component: SupervisorView,
      meta: { auth: true },
    },
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: ConfiguracoesView,
      meta: { auth: true },
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: ConsultasView
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.auth) {
    if (!auth.token) {
      return next({ name: 'login' });
    }

    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      auth.logout();
      return next({ name: 'login' });
    }

    if (to.meta.role && auth.user.role !== to.meta.role) {
      return next({ name: 'Pagina Inicial' });
    }
  }

  next();
});

export default router;
