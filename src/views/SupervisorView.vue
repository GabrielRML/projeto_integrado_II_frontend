<template>
  <navBarView></navBarView>
  <h1 class="text-alunos text-lg-center" style="margin: 1px; color: black;">Estagiários</h1>

  <div class="container">
    <div class="grid">
      <div class="col-12 md:col-4 lg:col-3" v-for="aluno in alunos" :key="aluno.id">
        <Panel class="shadow-2 p-1">
          <div class="flex flex-column align-items-center">
            <div class="card-body">
              <img src="../../public/image/user-icon.png" alt="" width="150">
              <h5 class="card-title text-sm font-bold">{{ aluno.nomeCompleto }}</h5>
              <p class="card-text text-xs">{{ aluno.email }}</p>
              <Button label="Detalhes" @click="abrirModal(aluno)" class="mt-1 size-small" style="background-color: #48A3BF;" />
            </div>
          </div>
        </Panel>
      </div>
    </div>
  </div>

  <Dialog 
    v-if="alunoSelecionado"
    :header="'Resumo de ' + (alunoSelecionado?.nomeCompleto || '')" 
    :modal="true" 
    @keydown.esc="fecharModal"
    :visible="modalVisivel"
    @hide="fecharModal"
    :style="{width: '50vw'}"
    transition="fade"
  >
    <div v-if="alunoSelecionado" class="modal-body">
      <p><strong>Nome:</strong> {{ alunoSelecionado.nomeCompleto }}</p>
      <p><strong>Email:</strong> {{ alunoSelecionado.email }}</p>
      <p><strong>Gênero:</strong> {{ alunoSelecionado.genero }}</p>
      
      <h4>Consultas:</h4>
      <ul>
        <li v-for="consulta in consultas" :key="consulta.id">
          <h6>Consulta:</h6>
          <p>{{ formatarData(consulta.dataConsulta) }} - {{ consulta.obsConsulta }}</p>
          
          <h6>Avaliações:</h6>
          <ul>
            <li v-for="avaliacao in avaliacoes" :key="avaliacao.id">
              <Rating :modelValue="avaliacao.notaAvaliacao" :readonly="true" :cancel="false" />
              <p>{{ avaliacao.comentarioAvaliacao }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <template #footer>
      <Button label="Fechar" icon="pi pi-times" @click="fecharModal" style="background-color: #48A3BF;" />
    </template>
  </Dialog>
</template>

<script>
import navBarView from '../components/navBarView.vue';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Rating from 'primevue/rating';
import axios from 'axios';

export default {
  components: {
    navBarView,
    Panel,
    Button,
    Dialog,
    Rating
  },
  data() {
    return {
      alunos: [], 
      consultas: [], 
      avaliacoes: [], 
      alunoSelecionado: null, 
      modalVisivel: false, 
    };
  },
  mounted() {
    axios.get('http://localhost:8080/api/usuario')
      .then(response => {
        this.alunos = response.data.map(usuario => ({
          ...usuario,
          nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
          primeiroNome: usuario.nome
        }));
      })
      .catch(error => console.error("Erro ao buscar usuários:", error));

    axios.get('http://localhost:8080/api/consulta')
      .then(response => {
        this.consultas = response.data.map(consulta => ({
          ...consulta,
          id: String(consulta.id),
          dataConsulta: consulta.data,
          obsConsulta: consulta.observacoes,
        }));
      })
      .catch(error => console.error("Erro ao buscar consultas:", error));

    axios.get('http://localhost:8080/api/avaliacao')
      .then(response => {
        this.avaliacoes = response.data.map(avaliacao => ({
          ...avaliacao,
          consulta_id: String(avaliacao.consulta_id),
          notaAvaliacao: avaliacao.nota,
          comentarioAvaliacao: avaliacao.comentario
        }));
      })
      .catch(error => console.error("Erro ao buscar avaliações:", error));
  },
  methods: {
    abrirModal(aluno) {
      this.alunoSelecionado = aluno; 
      this.modalVisivel = true; 
    },
    fecharModal() {
      this.modalVisivel = false; 
      this.alunoSelecionado = null; 
    },
    formatarData(data) {
      const date = new Date(data);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  }
};
</script>

<style scoped>
.container .grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  padding-top: 30px;
}

@media (max-width: 1024px) {
  .container .grid {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 600px) {
  .container .grid {
    grid-template-columns: 1fr; 
  }
}
</style>
