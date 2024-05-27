<template>
    <div class="box-search">
        <div class="row d-flex justify-content-center col-md-10 col-lg-10 col-xl-10 col-10">
            <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                <IconField iconPosition="left">
                    <InputIcon class="pi pi-search"></InputIcon>
                    <InputText
                        v-model="search"
                        placeholder="Procure por nome ou especialidade"
                        :style="{ width: '100%' }"
                    />
                </IconField>
            </div>
    
            <div class="col-md-3 col-lg-3 col-xl-3 col-12">
                <MultiSelect
                    id="motivo"
                    v-model="motivosSelecionados"
                    :options="listMotivos"
                    optionLabel="nome"
                    optionValue="id"
                    :maxSelectedLabels="2"
                    :style="{ width: '100%' }"
                    placeholder="Motivos"
                />
            </div>
        </div>
    </div>

    <div class="d-flex flex-column align-items-center" style="margin-top: 1rem;">
        <div class="row container-card col-md-8 col-lg-8 col-xl-8 col-11" style="border-radius: 10px;">
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

            <div class="col-md-6 col-lg-6 col-xl-6 col-12 d-flex flex-column justify-content-between" style="padding: 1rem;">
                <div>
                    <TabView :scrollable="true">
                        <TabPanel v-for="date in dates" :key="date.dateFormat">
                            <template #header>
                                <div class="flex align-items-center gap-2">
                                    <span class="font-bold white-space-nowrap">{{ date.dateFormat }}</span>
                                </div>
                            </template>

                            <div class="content-wrapper p-2">
                                <p class="m-0">
                                    <div 
                                        class="time-container d-flex justify-content-center align-items-center gap-2 flex-wrap"
                                        style="margin: 0.5rem;"
                                    >
                                    <div
                                        v-for="time of date.time"
                                        class="time text-center"
                                        :class="{ 'selected-time': selectedTime.time === time && selectedTime.date === date.date }"
                                        v-on:click="toggleTime({...date, time: time})"
                                    >
                                        <span>{{ time }}</span>
                                    </div>
                                    </div>
                                </p>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>

                <div v-if="selectedTime.dateFormat" class="d-flex justify-content-between align-items-center">
                    <span>{{ selectedTime.daysWeek }} - {{ selectedTime.dateFormat }} - {{ selectedTime.time }}</span>
                    <button class="custom-button-primary">Agendar</button>
                </div>
            </div>
        </div>

        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'
            }"
            :rows="10"
            :totalRecords="120"
            style="padding: 0.5rem 1rem;">
        </Paginator>
    </div>
</template>

<script>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import FloatLabel from 'primevue/floatlabel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import SelectButton from 'primevue/selectbutton';
import Paginator from 'primevue/paginator';

import http from '@/services/http.js';

export default {
    components: {
        IconField, InputIcon, InputText, MultiSelect, FloatLabel, http, TabView, TabPanel, SelectButton, Paginator
    },
    name: 'AgendamentoView',
    data() {
        return {
            dates: [],
            horarios: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            selectedTime: {
                date: null,
                dateFormat: null,
                daysWeek: null,
                daysWeekAbbreviated: null,
                time: null
            },
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
    watch: {
        selectedTime() {
            console.log(this.selectedTime);
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
        },

        mountTabs() {
            this.dates = this.getDatesForNextTwoWeeks();
        },

        getDatesForNextTwoWeeks() {
            const datesArray = [];
            const currentDate = new Date();

            for (let i = 0; i < 14; i++) {
                const date = new Date();
                date.setDate(currentDate.getDate() + i);
                datesArray.push(this.formatDate(date));
            }

            return datesArray;
        },

        formatDate(date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
            const diasDaSemanaAbreviado = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
            return {
                date: date,
                dateFormat: `${day}/${month}`,
                daysWeek: diasDaSemana[date.getDay()],
                daysWeekAbbreviated: diasDaSemanaAbreviado[date.getDay()],
                time: this.horarios
            };
        },

        toggleTime(selected) {
            if (this.selectedTime.date === selected.date && this.selectedTime.time === selected.time) {
                this.selectedTime = {
                    date: null,
                    dateFormat: null,
                    daysWeek: null,
                    daysWeekAbbreviated: null,
                    time: null
                };
                return;
            }
            this.selectedTime = selected; 
        }
    },
    mounted() {
        // this.getEspecialidades();
        this.mountTabs();
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

.p-float-label label {
  color: rgb(114, 114, 114);
}

.p-tabview-nav {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 1rem;
}

.content-wrapper {
    max-height: 300px; 
    overflow-y: auto;
    overflow-x: hidden;
}

.time-container {
    display: flex;
    flex-wrap: wrap;
}

.time {
    width: 50px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}

.selected-time {
    background-color: #348ba56b;
    border: 1px solid #48A3BF;
    color: white;
}

.p-paginator {
    padding: 0;
}
</style>