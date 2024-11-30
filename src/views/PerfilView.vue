<template>
    <navBarView></navBarView>

    <!-- Perfil Visualizar -->
    <div class="container" v-if="edit === 0">
        <div class="main-body">
        
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                        <div class="mt-3">
                          <h4>Carlos Dias</h4>
                          <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                          <p class="text-muted font-size-sm">Localizado, Tupã, SP</p>
                          <button class="btn btn-outline-primary">
                            Instagram &nbsp<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

                <div class="col-md-8 ">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Nome Completo</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          Carlos Eduardo Dias de Oliveira
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          carlos@teste.com
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Telefone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          (14) 99777-9154
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">CPF</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          516.182.408-54
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Endereço</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          Joaquim Abarca, Tupã, SP
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Genêro</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          Masculino
                        </div>
                      </div>
                      <hr>
                      <div class="row">
                        <div class="col-sm-12 d-flex justify-content-center">
                          <button Perfilutton class="btn btn-info d-flex align-items-center" @click="editProfile">
                            Editar Perfil
                            <font-awesome-icon :icon="['fas', 'pen-to-square']" class="me-2" />
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
    
                </div>

              </div>
    
            </div>
        </div>

        <!-- Perfil Editar -->
        <div class="container" v-if="edit === 1">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                                    <div class="mt-3">
                                        <h4>Carlos Dias</h4>
                                        <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                                        <p class="text-muted font-size-sm">Localizado, Tupã, SP</p>
                                        <button class="btn btn-outline-primary">
                                            Instagram &nbsp<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Nome completo</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="Carlos Eduardo Dias de Oliveira">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="carlos@teste.com">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Telefone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="(14)99777-9154">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">CPF</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="516.182.408-54">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Endereço</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="Joaquim Abarca, Tupã, SP">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Genêro</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="Masculino">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 d-flex justify-content-center">
                                      <button class="btn btn-info" @click="editProfile">Atualizar perfil</button>
                                    </div>
                                </div>
                                                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

// import axios from 'axios';
import navBarView from '../components/navBarView.vue';

export default {
  components: {
    RouterLink, RouterView, navBarView
  },
  data: function () {
    return {
        edit: 0,
        profile: {
                name: '',
                email: '',
                address: '',
                hobbies: '',
                job: '',
                skill: ''
            }
    }
  },
  computed: {
  },
  methods: {
    editProfile() {
      this.edit = this.edit === 0 ? 1 : 0;
      console.log(this.edit)
    },
    SalvarEdit(){
      this.edit = this.edit === 1 ? 0 : 1;
    }
  },
  mounted: function () {
    const profileData = JSON.parse(localStorage.getItem('profile')) || {};
        this.profile = { ...this.profile, ...profileData };
  },
}
</script>
<style>
body{
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}

</style>