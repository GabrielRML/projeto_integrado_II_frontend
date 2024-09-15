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
    <nav class="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block" style="z-index: 2000;">
        <div class="container-fluid">
            <img src="../../public/image/logo-3.png" height="80" alt="" loading="lazy" />
            <a class="nav-link" href="/home">
                <strong>Clinical link</strong>
            </a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/feed">Página Inicial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Agendamentos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Supervisor</a>
                    </li>
                </ul>
                <!-- Icone de perfil e menu dropdown -->
                <div class="d-flex">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                            <li><a class="dropdown-item" href="#">Minha Conta</a></li>
                            <li><a class="dropdown-item" href="#">Configurações</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr style="color: #ffffff; background-color: #000000; height: 1px;">
    </nav>
</template>

<style scoped>
.navbar {
    color: rgba(72, 163, 191, 0.481);
    background-color: white; /* Define o fundo da navbar como branco */
}
</style>
