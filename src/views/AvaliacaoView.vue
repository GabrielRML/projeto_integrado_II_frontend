<template>
    <div>
        <div class="card col-12 col-md-12 col-lg-12 col-xl-12">
            <div>
                <div class="user">
                    <img src="../../public/image/user.png" alt="" width="50px">
                    <span>Diego</span>
                </div>
                <div class="assessment d-flex aling-items-center gap-2">
                    <Rating :model-value="3.5" :cancel="false" />
                    <span>17 de março de 2024</span>
                </div>
            </div>
        
            <div style="padding: 0.5rem 0;">
                <span>O atendimento psicológico! A profissional foi empática, compreensiva e criou um ambiente seguro para compartilhar minhas preocupações. Saí da sessão com uma sensação de clareza e esperança. Recomendo muito!</span>
            </div>
        
        </div>
    </div>
</template>

<script>
import Rating from 'primevue/rating';

export default {
    name: 'AvaliacaoView',
    components: { Rating },
    data() {
        return { }
    },
    methods: { }
}

</script>

<style>

.card {
    display: flex;
    align-items: start;

    width: 100%;
    height: 100%;
    padding: .5rem 1rem;
    box-shadow: 1px 1px 5px;    
}

.user {
    display: flex;
    align-items: center;
    gap: 1rem;
}

</style>