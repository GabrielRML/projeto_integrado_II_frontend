<template>
  <navBarView></navBarView>
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
    import navBarView from '../components/navBarView.vue';
    
    export default {
      components: {
        Avatar,
        Card,
        Rating,
        navBarView
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
  