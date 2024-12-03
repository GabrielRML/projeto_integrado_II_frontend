<template>
    <NavBarComponent></NavBarComponent>
    <div class="d-flex flex-column align-items-center" style="margin-top: 1rem;">
        <div v-for="profissional in profissionais" :key="profissional.id"
            class="row container-card col-md-8 col-lg-8 col-xl-8 col-11 mb-4">

            <div class="col-md-6 col-lg-6 col-xl-6 col-12 container-info-prestador">
                <div class="d-flex align-items-center">
                    <img src="../assets/avatar.png" alt="Foto de Perfil" width="100px">
                    <div class="d-flex flex-column">
                        <h5 class="username">{{ profissional.nome }} {{ profissional.sobrenome }}</h5>
                        <span class="fontColorInfo">
                            {{ profissional.detalhesProfissionais?.descricao || 'Psicologia' }} -
                            {{ profissional.detalhesProfissionais?.anosExperiencia || 'N/A' }} anos de experiência
                        </span>
                        <span class="fontColorInfo">CRP: {{ profissional.detalhesProfissionais?.crp || 'N/A' }}</span>
                    </div>
                </div>

                <div class="fontColorInfo">
                    <span>{{ profissional.detalhesProfissionais?.especialidades?.join(', ') || 'N/A' }}</span>
                </div>

                <div style="padding: 10px 0;">
                    <span>
                        {{ profissional.detalhesProfissionais?.descricao ||
                            'Psicólogo dedicado a oferecer suporte empático e soluções práticas para promover o bem-estar emocional.' }}
                    </span>
                </div>

                <div style="padding: 10px 0;">
                    <span>Feedback</span>
                </div>

                <div style="padding: 10px 0;">
                    <span>Tempo de sessão: {{ profissional.detalhesProfissionais?.tempoSessao || 'N/A' }}</span>
                </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6 col-12 container-agenda">
                <AgendaComponent :profissionalId="profissional.id" :jsonData="profissional.agenda" />
            </div>
        </div>
    </div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import AgendaComponent from '@/components/AgendaComponent.vue';
import axiosInstance from '@/services/http';

export default {
    components: {
        NavBarComponent,
        AgendaComponent,
    },
    data() {
        return {
            profissionais: [],
        };
    },
    methods: {
        async fetchProfissionais() {
            try {
                await axiosInstance.get('/usuario/profissionais', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-type': 'application/json',
                    },
                })
                .then((response) => {
                    this.profissionais = response.data;
                });
            } catch (error) {
                console.error('Erro ao buscar psicólogos:', error);
            }
        },
    },
    mounted() {
        this.fetchProfissionais();
    },
};
</script>

<style>
.container-card {
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 1rem;

    background-color: white;
}

.container-info-prestador {
    width: 50%;
    padding-right: 10px;
    overflow-y: auto;
}

.container-info-prestador img {
    border-radius: 50%;
    margin-right: 10px;
}

.container-agenda {
    width: 50%;
    padding-left: 10px;
    height: 100%;
    overflow-y: auto;
}

h5.username {
    margin: 0;
}

.fontColorInfo {
    color: gray;
    font-size: 0.9rem;
}

.col-md-6.col-lg-6.col-xl-6.col-12 {
    padding-left: 10px;
}

.container-card .col-md-6 {
    flex: 1;
}
</style>
