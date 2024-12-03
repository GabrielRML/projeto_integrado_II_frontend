import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.js';
import CadastroView from '@/views/CadastroView.vue';
import Home from '../views/home.vue'
import LoginView from '@/views/LoginView.vue'
import AgendamentoView from '@/views/AgendamentoView.vue';
import TelaDeAvaliacaoView from '@/views/TelaDeAvaliacaoView.vue';
import SupervisorView from '@/views/SupervisorView.vue';
import ConfiguracoesView from '@/views/ConfiguracoesView.vue';
import ConsultasView from '@/views/ConsultasView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Pagina Inicial',
      component: Home
    },
    {
      path: '/',
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
    },
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: ConfiguracoesView
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: ConsultasView
    },
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
