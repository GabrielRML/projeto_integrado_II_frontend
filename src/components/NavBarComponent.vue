<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink, RouterView
  },
  data: function () {
    return {
      user: null,
      dadosManipulando:{}
    }
  },
  computed: {},
  methods: {},
  mounted: function () {}
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" style="z-index: 2000;">
        <div class="container-fluid">
            <img src="../../public/image/logo-3.png" height="60" alt="" loading="lazy" />
            <a class="navbar-brand" href="/home">
                <strong>Clinical Link</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample01"
                aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Página Inicial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/agendamento">Agendamentos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/avaliacao">Avaliação</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/supervisor">Supervisor</a>
                    </li>
                </ul>
                <div class="d-flex">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                            <li><a class="dropdown-item" href="/perfil">Minha Conta</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="/">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-3"></div>
        </div>
        <hr style="color: #ffffff; background-color: #000000; height: 1px;">
        
    </nav>
    <div style="margin-top: 100px;"> 
    </div>
    
</template>

<style scoped>
.navbar {
    color: rgba(72, 163, 191, 0.481);
    background-color: white; 
}
.navbar-nav .nav-link {
    color: #48A3BF; 
}

.navbar-nav .nav-link:hover {
    color: #0056b3;
}

.navbar-brand{
    color: #48A3BF; 
}

</style>
