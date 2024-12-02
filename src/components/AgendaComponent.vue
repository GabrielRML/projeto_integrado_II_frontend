<template>
    <div class="container mt-3">
        <div class="d-flex justify-content-between mb-3">
            <Button icon="pi pi-chevron-left" text raised @click="prev" style="border-radius: 50%;" />
            <Button icon="pi pi-chevron-right" text raised @click="next" style="border-radius: 50%;" />
        </div>

        <div class="table-responsive">
            <DataTable :value="agenda">
                <Column v-for="(day, index) in agenda" :key="index" :header="formatDate(day.date)" :field="day.date">
                    <template #body="slotProps">
                        <div v-for="hour in hours" :key="hour" class="hour-cell">
                            <div class="hour-button p-1 rounded mb-1" style="cursor: pointer;"
                                @click="toggleSelection(day.date, hour)">
                                {{ hour }}
                            </div>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const agenda = ref([
            { date: "2024-10-13", selectedHours: [] },
            { date: "2024-10-14", selectedHours: [] },
            { date: "2024-10-15", selectedHours: [] },
            { date: "2024-10-16", selectedHours: [] },
        ]);
        const hours = ref(
            Array.from({ length: 24 }, (_, index) => `${index.toString().padStart(2, "0")}:00`)
        );

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const optionsWeekday = { weekday: "short" };
            const optionsDayMonth = { day: "numeric", month: "short" };

            const weekday = new Intl.DateTimeFormat("pt-BR", optionsWeekday).format(date);
            const dayMonth = new Intl.DateTimeFormat("pt-BR", optionsDayMonth).format(date);

            return `${weekday}<br>${dayMonth}`;
        };

        const toggleSelection = (date, hour) => {
            const day = agenda.value.find((d) => d.date === date);
            if (day) {
                const index = day.selectedHours.indexOf(hour);
                if (index === -1) {
                    day.selectedHours.push(hour);
                } else {
                    day.selectedHours.splice(index, 1);
                }
            }
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
            formatDate,
            toggleSelection,
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
    background-color: #63c9e079
}

.text-white {
    color: white !important;
}
</style>
