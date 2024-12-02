<template>
    <div>
        <div v-for="(config, configIndex) in configuracoes" :key="config.id" class="container-config-agenda">
            <div class="container-config">
                <div class="d-flex flex-column gap-2">
                    <label for="ativoDesde">Data</label>
                    <Calendar id="ativoDesde" dateFormat="dd/mm/yy" :minDate="getUltimaDataValida()"
                        v-model="config.ativoDesde" />
                </div>

                <div class="d-flex flex-column gap-2">
                    <label for="horarioInicio">Horário inicial</label>
                    <Calendar id="horarioInicio" showIcon iconDisplay="input" timeOnly v-model="config.horarioInicio">
                        <template #inputicon="{ clickCallback }">
                            <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                        </template>
                    </Calendar>
                </div>

                <div class="d-flex flex-column gap-2">
                    <label for="horarioFinal">Horário final</label>
                    <Calendar id="horarioFinal" showIcon iconDisplay="input" timeOnly v-model="config.horarioFim">
                        <template #inputicon="{ clickCallback }">
                            <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                        </template>
                    </Calendar>
                </div>

                <div class="d-flex flex-column gap-2">
                    <label for="diasDaSemana">Dias da semana</label>
                    <MultiSelect id="diasDaSemana" class="w-full md:w-20rem" display="chip"
                        :options="diasDaSemanaOptions" optionLabel="label" placeholder="Selecione os dias da semana"
                        :maxSelectedLabels="3" v-model="config.diasSemana" />
                </div>

                <div class="container-button">
                    <Button class="rounded" icon="pi pi-plus" label="Adicionar Exceção"
                        @click="adicionarExcecao(configIndex)" />
                    <Button class="rounded" icon="pi pi-times" severity="danger" label="Remover Configuração"
                        @click="removerConfiguracao(configIndex)" />
                </div>
            </div>

            <div v-for="(ex, exIndex) in config.excecoes" :key="ex.id" class="container-excecao">
                <div class="d-flex flex-column gap-2">
                    <label for="dataInicioEx">Data de início</label>
                    <Calendar id="dataInicioEx" dateFormat="dd/mm/yy" :minDate="config.ativoDesde"
                        v-model="ex.dataInicio" />
                </div>

                <div class="d-flex flex-column gap-2">
                    <label for="dataFinalEx">Data final</label>
                    <Calendar id="dataFinalEx" dateFormat="dd/mm/yy" :minDate="ex.dataInicio" v-model="ex.dataFim" />
                </div>

                <div class="container-button">
                    <Button class="rounded" icon="pi pi-times" severity="danger" label="Remover Exceção"
                        @click="removerExcecao(configIndex, exIndex)" />
                </div>
            </div>
        </div>

        <Button class="rounded mt-3" icon="pi pi-plus" label="Adicionar Configuração" @click="adicionarConfiguracao" />
    </div>
</template>


<script>
import { DiasDaSemana } from "@/enums/dias-da-semana.enum";

export default {
    data() {
        return {
            diasDaSemanaOptions: Object.values(DiasDaSemana),
            configuracoes: [],
        };
    },
    methods: {
        adicionarConfiguracao() {
            const ultimaDataValida = this.getUltimaDataValida();

            if (!ultimaDataValida) {
                alert("Não há datas disponíveis para adicionar uma nova configuração.");
                return;
            }

            const novaConfiguracao = {
                id: null,
                ativoDesde: ultimaDataValida,
                horarioInicio: null,
                horarioFim: null,
                diasSemana: [],
                excecoes: []
            };

            this.configuracoes.push(novaConfiguracao);
        },

        removerConfiguracao(index) {
            this.configuracoes.splice(index, 1);
        },

        adicionarExcecao(configIndex) {
            const config = this.configuracoes[configIndex];
            const ultimaDataExcecao = this.getUltimaDataExcecao(config);

            const novaExcecao = {
                id: null,
                dataInicio: ultimaDataExcecao || config.ativoDesde,
                dataFim: null,
                horaInicio: null,
                horaFim: null,
                ativo: true
            };

            config.excecoes.push(novaExcecao);
        },

        removerExcecao(configIndex, exIndex) {
            this.configuracoes[configIndex].excecoes.splice(exIndex, 1);
        },

        getUltimaDataValida() {
            let ultimaData = null;

            this.configuracoes.forEach((config) => {
                const ultimaExcecao = this.getUltimaDataExcecao(config);
                if (ultimaExcecao) {
                    ultimaData = ultimaData ? new Date(Math.max(ultimaData, ultimaExcecao)) : ultimaExcecao;
                } else {
                    ultimaData = ultimaData ? new Date(Math.max(ultimaData, config.ativoDesde)) : config.ativoDesde;
                }
            });

            if (!ultimaData) {
                ultimaData = new Date();
            } else {
                ultimaData.setDate(ultimaData.getDate() + 1);
            }

            return ultimaData;
        },

        getUltimaDataExcecao(config) {
            if (config.excecoes.length === 0) {
                return null;
            }
            const ultimaExcecao = config.excecoes[config.excecoes.length - 1];
            return ultimaExcecao.dataFim || ultimaExcecao.dataInicio;
        },

        isDataInvalida(data) {
            const ultimaDataValida = this.getUltimaDataValida();
            return data < ultimaDataValida;
        }
    }
};
</script>

<style>
.container-config-agenda {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.container-config {
    display: flex;
    justify-content: space-around;
    gap: .5rem;
}

.container-button {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: .5rem;
}

.container-excecao {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 0.5rem;
    margin-left: 1rem;
}
</style>