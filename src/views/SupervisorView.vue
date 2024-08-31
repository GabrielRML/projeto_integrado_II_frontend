<template>
    <div class="navbar navbar-expand-lg" style="height: 120px; background-color: rgba(72, 163, 191, 0.481); display: flex; align-items: center; padding: 0 20px;">
  <div class="container-fluid d-flex justify-content-between align-items-center">

    <div class="navbar-brand">
      <img src="../../public/image/logo-3.png" class="logo larger-image" alt="logo" style="width: 160px;">
    </div>


    <div class="d-flex align-items-center w-100 justify-content-between">
      <!-- Texto centralizado -->
      <div class="mx-auto d-flex align-items-center">
        <router-link to="/" class="pagina-inicial" style="text-decoration: none; color: #fff;">
          <h3 style="margin: 0;">Página Inicial</h3>
        </router-link>
        
        <router-link to="/supervisor" class="supervisor" style="text-decoration: none; color: inherit;">
          <h3 class="alunos with-line" style="margin: 0; border-bottom: 3px solid #fff; margin-left: 35px;color: #fff;">
            Alunos
          </h3>
        </router-link>
      </div>
    </div>
  </div>

  <div class="notification-icon">
    <img src="../../public/image/notification.png" alt="" style="width: 25px;margin-right: 15px;">
  </div>

  <div class="user-icon">
    <router-link to="/usuario" class="usuario">
      <img src="../../public/image/user-icon.png" alt="" style="width: 60px;margin-right: 5px;">
    </router-link>
  </div>

  <div class="exit-icon">
    <router-link to="/login" class="exit">
      <img src="../../public/image/exit.png" alt="" style="width: 45px;">
    </router-link>

  </div>

</div>
  <div class="text-alunos text-lg-center" style="margin-top: 10px;color: rgba(72, 163, 191, 0.481);">
    <h1>Alunos</h1>
  </div>

  <div class="container" style="margin-top: 40px;">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <img src="../../public/image/avatar-1.png" alt=""style="margin-top: 10px;">
            <div class="card-body">
              <h5 class="card-title">Pedro</h5>
              <p class="card-text">Pisicologia 5 termo</p>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="people-count">
                <i class="fas fa-user-friends"></i> 7
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <div class="card">
            <img src="../../public/image/avatar-2.png" alt=""style="margin-top: 10px;">
            <div class="card-body">
              <h5 class="card-title">Maria</h5>
              <p class="card-text">Pisicologia 3 termo</p>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="people-count">
                <i class="fas fa-user-friends"></i> 78
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <div class="card">
            <img src="../../public/image/avatar-3.png" alt=""style="margin-top: 10px;">
            <div class="card-body">
              <h5 class="card-title">Joao</h5>
              <p class="card-text">Pisicologia 6 termo</p>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="people-count">
                <i class="fas fa-user-friends"></i> 56
              </div>
            </div>
          </div>
        </div>


        <div class="col-md-3">
          <div class="card">
            <img src="../../public/image/avatar-4.png" alt="" style="margin-top: 10px;">
            <div class="card-body">
              <h5 class="card-title">Andressa</h5>
              <p class="card-text">Pisicologia 1 termo</p>
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="people-count">
                <i class="fas fa-user-friends"></i> 15
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

</script>
<style>
.box-search {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48A3BF;
  padding: 2rem 0;
}

.container-card {
  box-shadow: 2px 2px 10px #cfcfcf;
}

.container-info-prestador {
  background-color: white;
  border-radius: 10px;
}

</style>