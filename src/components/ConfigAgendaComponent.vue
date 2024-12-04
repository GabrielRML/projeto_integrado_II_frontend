<template>
    <div>
        <div style="padding: 1rem 0;">
            <Button class="rounded" icon="pi pi-plus" label="Adicionar Configuração"
                @click="mostrarModalAdicionarConfiguracao" />
        </div>

        <div class="container-config-agenda">
            <DataTable :value="configuracoes" class="p-datatable-sm">
                <Column field="ativoDesde" header="Data">
                    <template #body="slotProps">
                        {{ formatarData(slotProps.data.ativoDesde) }}
                    </template>
                </Column>

                <Column field="horarioInicio" header="Horário Inicial">
                    <template #body="slotProps">
                        {{ slotProps.data.horarioInicio }}
                    </template>
                </Column>

                <Column field="horarioFim" header="Horário Final">
                    <template #body="slotProps">
                        {{ slotProps.data.horarioFim }}
                    </template>
                </Column>

                <Column field="diasSemana" header="Dias da Semana">
                    <template #body="slotProps">
                        <ul>
                            <li v-for="dia in slotProps.data.diasSemana" :key="dia">{{ getDiaSemanaLabel(dia) }}</li>
                        </ul>
                    </template>
                </Column>

                <Column header="Ações">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-text p-button-info"
                            @click="editarConfiguracao(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-text p-button-danger"
                            @click="deletarConfiguracao(slotProps.data.id)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog :header="isEditMode ? 'Editar Configuração' : 'Adicionar Configuração'"
            v-model:visible="exibirModalAdicionar" :closable="!isSaving" :modal="true" :draggable="false"
            :resizable="false" :style="{ width: '50vw' }">
            <div>
                <div class="d-flex flex-column">
                    <label for="ativoDesde">Data</label>
                    <Calendar id="ativoDesde" dateFormat="dd/mm/yy" :minDate="new Date()"
                        v-model="novaConfiguracao.ativoDesde" />
                </div>

                <div class="d-flex flex-column">
                    <label for="horarioInicio">Horário inicial</label>
                    <Calendar id="horarioInicio" showIcon iconDisplay="input" timeOnly
                        v-model="novaConfiguracao.horarioInicio">
                        <template #inputicon="{ clickCallback }">
                            <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                        </template>
                    </Calendar>
                </div>

                <div class="d-flex flex-column">
                    <label for="horarioFinal">Horário final</label>
                    <Calendar id="horarioFinal" showIcon iconDisplay="input" timeOnly
                        v-model="novaConfiguracao.horarioFim">
                        <template #inputicon="{ clickCallback }">
                            <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                        </template>
                    </Calendar>
                </div>

                <div class="d-flex flex-column">
                    <label for="diasDaSemana">Dias da semana</label>
                    <MultiSelect id="diasDaSemana" class="w-full md:w-20rem" display="chip"
                        :options="diasDaSemanaOptions" optionLabel="label" optionValue="value"
                        placeholder="Selecione os dias da semana" :maxSelectedLabels="3"
                        v-model="novaConfiguracao.diasSemana" />
                </div>

                <div class="container-button">
                    <Button :label="isEditMode ? 'Salvar Alterações' : 'Salvar'" icon="pi pi-check"
                        @click="isEditMode ? atualizarConfiguracao() : salvarNovaConfiguracao()" :disabled="isSaving"
                        class="rounded" />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script>
import { DiasDaSemana } from "@/enums/dias-da-semana.enum";
import axiosInstance from "@/services/http";
import { useAuthStore } from "@/stores/auth";

export default {
    data() {
        return {
            diasDaSemanaOptions: Object.values(DiasDaSemana),
            configuracoes: [],
            novaConfiguracao: {
                ativoDesde: null,
                horarioInicio: null,
                horarioFim: null,
                diasSemana: [],
            },
            auth: useAuthStore(),
            isSaving: false,
            exibirModalAdicionar: false,
            isEditMode: false,
            configuracaoEditadaId: null,
        };
    },
    methods: {
        mostrarModalAdicionarConfiguracao() {
            this.exibirModalAdicionar = true;
            this.isEditMode = false;
            this.novaConfiguracao = {
                ativoDesde: null,
                horarioInicio: null,
                horarioFim: null,
                diasSemana: [],
            };
        },

        editarConfiguracao(configuracao) {
            this.exibirModalAdicionar = true;
            this.isEditMode = true;
            this.configuracaoEditadaId = configuracao.id;
            this.novaConfiguracao = { ...configuracao };
        },

        async atualizarConfiguracao() {
            try {
                this.isSaving = true;
                await axiosInstance.put(`/agenda/config/${this.configuracaoEditadaId}`, this.novaConfiguracao, {
                    headers: {
                        'Authorization': `Bearer ${this.auth.token}`,
                        'Content-type': 'application/json',
                    },
                })
                    .then(() => {
                        this.exibirModalAdicionar = false;
                        this.isSaving = false;
                        this.findAllConfiguracoes();
                    });
            } catch (error) {
                alert("Erro ao atualizar a configuração.");
                this.isSaving = false;
            }
        },

        async salvarNovaConfiguracao() {
            try {
                this.isSaving = true;
                await axiosInstance.post('/agenda/config', this.novaConfiguracao, {
                    headers: {
                        'Authorization': `Bearer ${this.auth.token}`,
                        'Content-type': 'application/json',
                    }
                })
                    .then(() => {
                        this.exibirModalAdicionar = false;
                        this.isSaving = false;
                        this.findAllConfiguracoes();
                    });
            } catch (error) {
                alert("Erro ao salvar a configuração.");
                this.isSaving = false;
            }
        },

        formatarData(data) {
            if (!data) return '';
            return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
        },

        async findAllConfiguracoes() {
            try {
                const response = await axiosInstance.get('/agenda/config', {
                    headers: {
                        'Authorization': `Bearer ${this.auth.token}`,
                        'Content-type': 'application/json',
                    },
                });
                this.configuracoes = response.data;
            } catch (error) {
                alert("Erro ao carregar as configurações.");
            }
        },

        getDiaSemanaLabel(dia) {
            const diaSemana = this.diasDaSemanaOptions.find(d => d.value === dia);
            return diaSemana ? diaSemana.label : ''; 
        },
    },
    mounted() {
        this.findAllConfiguracoes();
    },
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
</style>
