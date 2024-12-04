<template>
    <NavBarComponent></NavBarComponent>
    <div class="container">
        <div class="card">
            <div class="d-flex align-items-center gap-4" style="padding: 2rem 1rem;">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                    class="rounded-circle border border-5" width="200px">
    
                <div class="mt-3">
                    <h4>{{nomeCompleto}}</h4>
                    <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                    <p class="text-muted font-size-sm">{{telefone}}</p>
                    <button class="btn btn-outline-primary">
                        Instagram &nbsp;<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                    </button>
                </div>
            </div>
        </div>

        <TabView>
            <TabPanel header="Perfil">
                <PerfilComponent />
            </TabPanel>
            <TabPanel header="Config. da agenda">
                <ConfigAgendaComponent />
            </TabPanel>
            <TabPanel header="Endereço">
                <MapaComponent />
            </TabPanel>
        </TabView>
    </div>
</template>


<script>
import ConfigAgendaComponent from '@/components/ConfigAgendaComponent.vue';
import PerfilComponent from '@/components/PerfilComponent.vue';
import MapaComponent from '@/components/MapaComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue';
import http from '@/services/http.js';

export default {
    components: {
        ConfigAgendaComponent, PerfilComponent, MapaComponent, NavBarComponent
    },
    data() {
        return {
            user: [],
            nomeCompleto: null,
            telefone: null
        }
    },
    methods: {
        async buscaUsuarioPorId() {
            http.get(`/detalhes-profissionais/detalhesusuario/${this.user.id}`)
            .then(response => {
                this.nomeCompleto = `${response.data[0].usuario.nome} ${response.data[0].usuario.sobrenome}`
                this.telefone = response.data[0].telefone
            })
            .catch(error => {
            console.error('Erro ao buscar usuário:', error);
            });
        },
    },
    mounted: function () {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    this.user = user
    this.buscaUsuarioPorId();
  },
}
</script>

<style>
.container {
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-tabview-nav {
    margin: 0;
}

.p-tabview-nav-link {
    text-decoration: none;
}
</style>