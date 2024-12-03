<template>
  <navBarView></navBarView>

  <!-- Perfil Visualizar -->
  <div class="container" v-if="edit === 0">
    <div class="main-body">
      <div class="row gutters-sm">


        <div class="container d-flex align-items-center" >
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nome Completo</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.nomeCompleto }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.email }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.telefone || '(Não informado)' }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">CPF</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.cpf }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Endereço</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.endereco || 'Endereço não informado' }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gênero</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.genero }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Registro Profissional</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.registroProfissional || 'Não informado' }}
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-12 d-flex justify-content-center">
                    <button class="btn btn-info d-flex align-items-center" @click="editProfile">
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
      
  </div>

  <!-- Perfil Editar -->
  <div class="container" v-if="edit === 1">
    <div class="main-body">

      <div class="container d-flex align-items-center">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Nome completo</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.nomeCompleto">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.email">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Telefone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.telefone">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">CPF</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.cpf">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Endereço</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.endereco">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Gênero</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.genero">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Registro Profissional</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.registroProfissional">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                  <button class="btn btn-info" @click="SalvarEdit">
                    Salvar Perfil
                    <font-awesome-icon :icon="['fas', 'save']" class="me-2" />
                  </button>
                  <div class="col-md-1"></div>
                  <button class="btn btn-info" @click="edit = 0">
                    Cancelar
                    <font-awesome-icon :icon="['fas', 'save']" class="me-2" />
                  </button>                  
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
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth';  
import http from '@/services/http.js';
import navBarView from '../components/navBarView.vue';

// Importando VUE LEAFLET
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    RouterLink, RouterView, LMap, LTileLayer, navBarView, 
  },
  data: function () {
    return {
      edit: 0,
      filtrarEstado: [-23.5505, -46.6333],
      teste: [-23.5505, -46.6333],
      zoom: 18,
      profile: {
        nomeCompleto: null,
        email: null,
        cpf: null,
        genero: null,
        dataNascimento: null,
        descricao: null,
        localTrabalho: null,
        localTrabalhoLat: null,
        localTrabalhoLong: null,
        registroProfissional: null,
        telefone: null
      },
      idDetalhe: null,
      getPrimeiroNome: null,
      getSobrenome: null,
      user: {
        userId: null,
        username: null
      },
      tipoUsuario: null,
      usuario: [],
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    usuarioLogado() {
      return this.authStore.user;  
    }
  },
  methods: {
    async buscaUsuarioPorId() {
      http.get(`/detalhes-profissionais/detalhesusuario/${this.user.id}`)
        .then(response => {
            const data = response.data[0]; 
            const usuario = data.usuario;
            this.idDetalhe = response.data[0].id

            this.profile = {
              nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
              email: usuario.email,
              telefone: data.telefone || '(Não informado)',
              cpf: usuario.cpf,
              endereco: usuario.endereco || 'Endereço não informado',
              genero: usuario.genero || 'Não informado',
              localTrabalho: data.localTrabalho || 'Não informado',
              localTrabalhoLat: data.localTrabalhoLat || 'Não informado',
              localTrabalhoLong: data.localTrabalhoLong || 'Não informado',
              registroProfissional: data.registroProfissional || 'Não informado',
              descricao: data.descricao || 'Não informado'
            };
        })
        .catch(error => {
          console.error('Erro ao buscar usuário:', error);
        });
    },
    editProfile() {
      this.edit = this.edit === 0 ? 1 : 0;
      console.log(this.edit);
    },
    SalvarEdit() {
      http.patch(`/detalhes-profissionais/${this.idDetalhe}`, {
          descricao: this.profile.descricao,
          telefone: this.profile.telefone,
          registroProfissional: this.profile.registroProfissional
      })
      .then(response => {
          Swal.fire({
              position: "top",
              icon: "success",
              title: `Detalhes atualizados com sucesso`,
              showConfirmButton: false,
              timer: 1500
          });
      })
      .catch(error => {
          Swal.fire({
              position: "top",
              icon: "warning",
              title: `Erro ao atualizar detalhes do profissional`,
              showConfirmButton: false,
              timer: 1500
          });
      });

      http.patch(`/usuario/${this.user.id}`, {
          cpf: this.profile.cpf,
          email: this.profile.email,
          genero: this.profile.genero
      })
      .then(response => {
          Swal.fire({
              position: "top",
              icon: "success",
              title: `Detalhes atualizados com sucesso`,
              showConfirmButton: false,
              timer: 1500
          });
      })
      .catch(error => {
          Swal.fire({
              position: "top",
              icon: "warning",
              title: `Erro ao atualizar detalhes do profissional`,
              showConfirmButton: false,
              timer: 1500
          });
      });


      this.edit = this.edit === 1 ? 0 : 1;
    },
  },
  mounted: function () {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    this.user = user
    this.buscaUsuarioPorId();
  },
};
</script>

<style>
#map-container {
  height: 600px;
}

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