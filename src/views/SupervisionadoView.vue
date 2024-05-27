<template>
    <div class="row d-flex justify-content-center align-items-center gap-2 flex-wrap" style="padding-top: 1rem;">
        <div class="card">
            <img class="user" src="../../public/image/user.png" alt="" width="70px">
            <div class="supervisionado">
                <spam>Lucas</spam>
                <span>RA: 9999999</span>
            </div>
            <div class="status">
                <div class="d-flex align-items-center gap-1" v-tooltip.top="'Avaliação'">
                    <i class="pi pi-star" style="color: #FDBE08"></i>
                    <span>4.6/5</span>
                </div>

                <div class="d-flex align-items-center gap-1" v-tooltip.top="'Comentários'">
                    <i class="pi pi-comment"></i>
                    <span>5</span>
                </div>

                <div class="d-flex align-items-center gap-1" v-tooltip.top="'Atendimentos realizados'">
                    <i class="pi pi-users"></i>
                    <span>10</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SupervisionadoView',
    components: { },
    data() {
        return { }
    },
    methods: { }
}

</script>

<style>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 200px;
    height: 200px;
    padding: 1rem .5rem;
    box-shadow: 1px 1px 5px;
}

.status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.supervisionado {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>