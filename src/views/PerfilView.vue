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
                  <h4>{{ profile.nomeCompleto }}</h4>
                  <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                  <p class="text-muted font-size-sm">{{ profile.localizacao || 'Tupã, SP' }}</p>
                  <button class="btn btn-outline-primary">
                    Instagram &nbsp;<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <h6 class="mb-0">Local de Trabalho</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ profile.localTrabalho || 'Não informado' }}
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
                <div class="col-sm-3">
                  <h6 class="mb-0">Localização (Lat/Long)</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ profile.localTrabalhoLat }}, {{ profile.localTrabalhoLong }}
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
    
      <!--Mapa leaflet-->
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-5 h100 w-100" style="margin-left:80px; height:600px; width:500px;">
          <l-map ref="map" v-model:zoom="zoom" :center="filtrarEstado">
            <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            ></l-tile-layer>
          </l-map>
          <div style="" class="col-6 mt-4 d-flex justify-content-center">
            <l-marker :lat-lng="filtrarEstado">
              <l-tooltip>{{this.teste}}</l-tooltip>
            </l-marker>
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
                  <h4>{{ profile.nomeCompleto }}</h4>
                  <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                  <p class="text-muted font-size-sm">{{ profile.localizacao || 'Tupã, SP' }}</p>
                  <button class="btn btn-outline-primary">
                    Instagram &nbsp;<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
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
                  <h6 class="mb-0">Local de Trabalho</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.localTrabalho">
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
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Localização (Lat/Long)</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" v-model="profile.localTrabalhoLat" placeholder="Latitude">
                  <input type="text" class="form-control" v-model="profile.localTrabalhoLong" placeholder="Longitude">
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                  <button class="btn btn-info" @click="SalvarEdit">
                    Salvar Perfil
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
import axios from 'axios';
import navBarView from '../components/navBarView.vue';
//Importando VUE LEAFLET
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    RouterLink, RouterView, LMap, LTileLayer
  },
  data: function () {
    return {
      edit: 0,
      filtrarEstado: [-23.5505, -46.6333],
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
      id: '122fa850-aa7c-11ef-8231-f4b52057622d',
      idDetalhes:'1a2b3c4d-1111-2222-3333-444444444444',
      tipoUsuario:null,
      usuario: [],
    };
  },
  methods: {
    async buscaUsuarioPorId() {
    axios.get(`http://localhost:8080/api/usuario/${this.id}`)
      .then(response => {
          this.tipoUsuario = response.data.tipoUsuario
          this.usuario = response.data;
          this.profile.nomeCompleto = `${this.usuario.nome} ${this.usuario.sobrenome}`;
          this.profile.email = this.usuario.email;
          this.profile.cpf = this.usuario.cpf;
          this.profile.genero = this.usuario.genero;
          this.profile.dataNascimento = this.usuario.dataNascimento;
        axios.get(`http://localhost:8080/api/detalhes-profissionais/${this.idDetalhes}`)
          .then(response => {
            this.profile.descricao = response.data.descricao;
            this.profile.localTrabalho = response.data.localTrabalho;
            this.profile.localTrabalhoLat = response.data.localTrabalhoLat;
            this.profile.localTrabalhoLong = response.data.localTrabalhoLong;
            this.profile.registroProfissional = response.data.registroProfissional;
            this.profile.telefone = response.data.telefone;
          })
          .catch(error => {
            console.error('Erro ao buscar usuário:', error);
          });

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
      console.log("aqui")
      this.edit = this.edit === 1 ? 0 : 1;
    },
  },
  mounted: function () {
    const profileData = JSON.parse(localStorage.getItem('profile')) || {};
    this.profile = { ...this.profile, ...profileData };
    this.buscaUsuarioPorId();
  },
};
</script>

<style>
#map-container {
  height: 600px;
}

body{
    margin-top:20px;
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