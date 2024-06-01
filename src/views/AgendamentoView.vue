<template>
    <div class="box-search">
        <div class="row col-md-10 col-lg-10 col-xl-10 col-10">
            <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="padding-top: 1.7rem;">
                <IconField iconPosition="left">
                    <InputIcon class="pi pi-search"></InputIcon>
                    <InputText
                        v-model="search"
                        placeholder=""
                        :style="{ width: '100%' }"
                    />
                </IconField>
            </div>
    
            <div class="col-md-3 col-lg-3 col-xl-3 col-12" style="padding-top: 1.7rem;">
                <FloatLabel>
                    <MultiSelect
                        id="motivo"
                        v-model="motivosSelecionados"
                        :options="listMotivos"
                        optionLabel="nome"
                        optionValue="id"
                        :maxSelectedLabels="2"
                        :style="{ width: '100%' }"
                    />
                    <label for="motivo">Motivo</label>
                </FloatLabel>
            </div>
    
            <div class="col-md-3 col-lg-3 col-xl-3 col-12" style="padding-top: 1.7rem;">
                <FloatLabel>
                    <MultiSelect
                        id="especialidade"
                        v-model="especialidadeSelecionada"
                        :options="especialidades"
                        optionLabel="nome"
                        optionValue="id"
                        :maxSelectedLabels="2"
                        :style="{ width: '100%' }"
                    />
                    <label for="especialidade">Especialidades</label>
                </FloatLabel>
            </div>
        </div>
    </div>

    <div class="d-flex flex-column align-items-center" style="margin-top: 1rem;">
        <div class="row container-card col-md-8 col-lg-8 col-xl-8 col-11" style="background-color: black; border-radius: 10px;">
            <div class="col-md-6 col-lg-6 col-xl-6 col-12 container-info-prestador">
                <div class="d-flex align-items-center">
                    <img src="../assets/avatar.png" alt="Foto de Perfil" width="100px">
                    <div class="d-flex flex-column">
                        <h5 class="username">Diego Moreira</h5>
                        <span class="fontColorInfo">Psicologia - 2 anos de experiência</span> 
                        <span class="fontColorInfo">CRP: 00/000000</span>
                    </div>
                </div>

                <div class="fontColorInfo">
                    <span>Autoestima, Sexualidade</span>
                </div>

                <div style="padding: 10px 0;">
                    <span>Psicólogo dedicado a oferecer suporte empático e soluções práticas para promover o bem-estar emocional. Abordo questões individuais com respeito e confidencialidade, utilizando abordagens terapêuticas personalizadas para capacitar meus clientes a superar desafios e alcançar seu potencial máximo</span>
                </div>

                <div style="padding: 10px 0;">
                    <span>FeedBack</span>
                </div>

                <div style="padding: 10px 0;">
                    <span>Tempo de sessão 50 min</span>
                </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                <span>teste</span>
            </div>
        </div>
    </div>
</template>

<script>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import FloatLabel from 'primevue/floatlabel';
import http from '@/services/http.js';

export default {
    components: {
        IconField, InputIcon, InputText, MultiSelect, FloatLabel, http
    },
    name: 'AgendamentoView',
    data() {
        return {
            search: '',
            especialidades: [],
            especialidadeSelecionada: null,
            motivosSelecionados: [],
            listMotivos: [],
            agendamento: {
                id: null,
                data: null,
                hora: null,
                cliente: null,
                servico: null,
                valor: null
            }
        }
    },
    methods: {
        getEspecialidades() {
            http.get('/especialidades')
                .then(response => {
                    this.especialidades = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getEspecialidades();
    }
}
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

.username {
    font-size: 16px;
    font-weight: bold;
}

.fontColorInfo {
    color: #B9B9B9;
    font-size: 14px;
}
</style>