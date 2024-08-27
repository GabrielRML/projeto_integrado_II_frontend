<template>
    <nav>
      <div class="navbar navbar-expand-lg" style="height: 120px; background: white;">
        <router-link to="/" class="navbar-brand" style="margin-left: 100px;">
          <img src="../../public/image/logo-3.png" class="logo larger-image" alt="logo" style="margin-left: 0px; margin-top: 135px; width: 270px;">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <!-- Adicione mais itens de navegação aqui, se necessário -->
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <button type="button" class="btn btn-light mx-2" @click="$router.push('/login')" style="width: 100px; font-size: 23px; background-color: #d3d3d3;">Login</button>
            </li>
            <li class="nav-item">
              <button class="btn mx-5" @click="$router.push('/cadastro')" style="background-color: #48A3BF; color: white; font-size: 23px;">Cadastro</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="p-m-3">
      <div class="profile">
        <Avatar
          image="public/image/people.png"
          shape="circle"
          size="xlarge"
          class="p-mr-3"
        />
        <div>
          <h2>{{ nome }}</h2>
          <p>{{ idade }} anos</p>
        </div>
      </div>
      <h3 class="p-mt-4">Avaliações</h3>
      <div v-for="(avaliacao, index) in avaliacoes" :key="index" class="p-mt-2">
        <div class="avaliacao-header">
          <h4>{{ avaliacao.nome }}</h4>
          <Rating :value="avaliacao.estrelas" readonly stars="5" cancel="false" />
        </div>
        <p>{{ avaliacao.comentario }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import Avatar from 'primevue/avatar';
  import Card from 'primevue/card';
  import Rating from 'primevue/rating';
  
  export default {
    components: {
      Avatar,
      Card,
      Rating
    },
    name: 'TelaDeAvaliacaoView',
    data() {
      return {
        nome: "Carlos Eduardo",
        idade: 28,
        avaliacoes: [
          { nome: "João", estrelas: 4, comentario: "Ótimo trabalho!" },
          { nome: "Maria", estrelas: 5, comentario: "Excelente profissional!" },
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    align-items: center;
  }
  
  .avaliacao-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .larger-image {
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }
  
  .navbar-brand img {
    height: auto;
  }
  
  .nav-item button {
    font-size: 23px;
  }
  
  .navbar-nav .nav-item .btn {
    border-radius: 5px;
  }
  </style>
  