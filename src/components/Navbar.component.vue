<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../public/logoSemFundo.svg" alt="" width="50px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page" href="#"><i class="pi pi-home"></i> Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/especialistas" class="nav-link" href="#"><i class="pi pi-users"></i> Especialistas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/supervisionados" class="nav-link" href="#"><i class="pi pi-graduation-cap"></i> Supervisionados</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sessoes" class="nav-link" href="#"><i class="pi pi-calendar"></i> Sessões</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../assets/avatar.png" alt="Foto de Perfil" width="50px">
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><RouterLink to="#" class="dropdown-item" href="#">Perfil</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink to="#" class="dropdown-item" href="#">Logout</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Navbar',
    components: { RouterLink },
    data() {
        return {
            search: ''
        }
    },
    methods: { }
}
</script>

<style>

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Remover as seta do drop */
.dropdown-toggle::after {
  display: none;
}

</style>