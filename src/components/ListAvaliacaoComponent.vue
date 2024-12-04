<template>
    <div class="avaliacao-list">
        <h2>Lista de Avaliações</h2>
        <div v-for="avaliacao in avaliacoes" :key="avaliacao.id" class="avaliacao-item">
            <p><strong>Paciente:</strong> {{ avaliacao.consulta.paciente }}</p>
            <p><strong>Data:</strong> {{ formatarData(avaliacao.consulta.data) }}</p>
            <p class="d-flex align-items-center gap-2">
                <strong>Nota:</strong>
                <Rating v-model="avaliacao.nota" readonly :cancel="false" />
            </p>
            <p><strong>Comentário:</strong> {{ avaliacao.comentario }}</p>
            <Divider />
        </div>
    </div>
</template>

<script>

export default {
    name: "ListAvaliacaoComponent",
    data() {
        return {
            avaliacoes: [
                {
                    id: "1f82e10d-4f4a-45b5-8a83-2bc7848a5f3e",
                    consulta: {
                        id: "consulta-1",
                        paciente: "João Silva",
                        data: "2024-12-01",
                        horario: "10:00",
                    },
                    nota: 5,
                    comentario: "Excelente atendimento, muito atenciosa!",
                    criadoEm: "2024-12-01T10:30:00Z",
                },
                {
                    id: "d95c88ab-3b75-4a7b-8051-604bd8dcee3f",
                    consulta: {
                        id: "consulta-2",
                        paciente: "Maria Souza",
                        data: "2024-12-02",
                        horario: "14:00",
                    },
                    nota: 4,
                    comentario: "Bom atendimento, mas demorou um pouco.",
                    criadoEm: "2024-12-02T14:45:00Z",
                },
                {
                    id: "a62a22ff-9a15-48f8-8d27-97252b7c9eb6",
                    consulta: {
                        id: "consulta-3",
                        paciente: "Pedro Henrique",
                        data: "2024-12-03",
                        horario: "09:00",
                    },
                    nota: 3,
                    comentario: "Consulta razoável, mas poderia ser mais detalhada.",
                    criadoEm: "2024-12-03T09:30:00Z",
                },
                {
                    id: "c7329ec7-5934-4b26-8e29-5f1bde098d23",
                    consulta: {
                        id: "consulta-4",
                        paciente: "Ana Paula",
                        data: "2024-12-04",
                        horario: "16:00",
                    },
                    nota: 2,
                    comentario: "Não gostei, senti que fui atendida com pressa.",
                    criadoEm: "2024-12-04T16:20:00Z",
                },
                {
                    id: "7c7b3df4-e2f4-4f95-9f67-f0e3db4bfba9",
                    consulta: {
                        id: "consulta-5",
                        paciente: "Lucas Fernandes",
                        data: "2024-12-05",
                        horario: "11:00",
                    },
                    nota: 1,
                    comentario: "Consulta péssima, médico mal educado.",
                    criadoEm: "2024-12-05T11:15:00Z",
                },
            ],
        };
    },
    methods: {
        formatarData(data) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(data).toLocaleDateString("pt-BR", options);
        },
    },
};
</script>

<style scoped>
.avaliacao-list {
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avaliacao-item {
    margin-bottom: 20px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}
</style>