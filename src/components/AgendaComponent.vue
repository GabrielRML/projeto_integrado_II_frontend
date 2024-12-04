<template>
    <div class="container mt-3">
        <div class="d-flex justify-content-between mb-3">
            <Button icon="pi pi-chevron-left" text raised @click="prev" style="border-radius: 50%;" />
            <Button icon="pi pi-chevron-right" text raised @click="next" style="border-radius: 50%;" />
        </div>

        <div class="table-responsive">
            <DataTable :value="agenda" class="p-datatable-striped">
                <Column
                    v-for="(day, index) in agenda"
                    :key="index"
                    :field="day.data"
                >
                    <template #header>
                        <span v-html="formatDate(day.data)"></span>
                    </template>

                    <template #body="slotProps">
                        <div v-for="hour in hours" :key="hour" class="hour-cell">
                            <div
                                class="hour-button p-1 rounded mb-1"
                                :class="{ 'selected-hour': isSelected(day.data, hour) }"
                                @click="openDialog(day.data, hour)"
                            >
                                {{ hour }}
                            </div>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog 
            v-model:visible="dialogVisible" 
            :style="{ width: '400px' }" 
            modal 
            closable 
            dismissableMask 
            header="Detalhes do Horário"
        >
            <div class="p-3">
                <p><strong>Data:</strong> {{ selectedDate }}</p>
                <p><strong>Horário:</strong> {{ selectedHour }}</p>
                <p>Confirme sua consulta para este horário.</p>
                <div class="d-flex justify-content-end">
                    <Button label="Cancelar" class="p-button-text" @click="dialogVisible = false" />
                    <Button label="Confirmar" class="p-button-success ml-2" @click="confirmAppointment" />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
    props: {
        jsonData: {
            type: Array,
            required: true,
        },
        profissionalId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const agenda = computed(() =>
            props.jsonData.map((item) => ({
                data: item.data,
                selectedHours: item.horas || [],
            }))
        );

        const hours = ref(
            Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, "0")}:00`)
        );

        const dialogVisible = ref(false);
        const selectedDate = ref("");
        const selectedHour = ref("");

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const optionsWeekday = { weekday: "short" };
            const optionsDayMonth = { day: "numeric", month: "short" };

            const weekday = new Intl.DateTimeFormat("pt-BR", optionsWeekday).format(date);
            const dayMonth = new Intl.DateTimeFormat("pt-BR", optionsDayMonth).format(date);

            return `
            <div class="d-flex flex-column align-items-center justify-content-center">
                <span>${weekday}</span>
                <span>${dayMonth}</span>
            </div>`;
        };

        const isSelected = (date, hour) => {
            const day = agenda.value.find((d) => d.data === date);
            return day && day.selectedHours.includes(hour);
        };

        const openDialog = (date, hour) => {
            selectedDate.value = date;
            selectedHour.value = hour;
            dialogVisible.value = true;
        };

        const confirmAppointment = () => {
            console.log(`Consulta confirmada para ${selectedDate.value} às ${selectedHour.value}`);
            dialogVisible.value = false;
        };

        const prev = () => {
            console.log("Previous dates");
        };

        const next = () => {
            console.log("Next dates");
        };

        return {
            agenda,
            hours,
            dialogVisible,
            selectedDate,
            selectedHour,
            formatDate,
            isSelected,
            openDialog,
            confirmAppointment,
            prev,
            next,
        };
    },
};
</script>

<style scoped>
.hour-cell {
    cursor: pointer;
}

.hour-button {
    border: 1px solid #3D75BB;
    color: #3D75BB;
    font-weight: bold;
    text-align: center;
    background-color: #63c9e079;
}

.hour-button.text-white {
    background-color: #3D75BB;
    color: white !important;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.p-datatable .p-column-header-content {
    justify-content: center;
}
</style>
