<template>
    <div class="star-rating">
        <h3 class="text-center">Avaliação</h3>
        <Rating v-model="rating" stars="5" cancel="false" @change="onRatingChange"></Rating>
        <p class="rating-value">Nota: {{ rating }}</p>
        <textarea v-model="comment" placeholder="Deixe um comentário (opcional)" class="comment-box"></textarea>
        <Button label="Enviar Avaliação" class="p-button-rounded p-button-success" @click="submitReview" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            rating: 0,
            comment: "",
        };
    },
    methods: {
        onRatingChange() {
            console.log(`Nova avaliação: ${this.rating}`);
        },
        submitReview() {
            if (this.rating === 0) {
                alert("Por favor, selecione uma avaliação antes de enviar.");
                return;
            }
            console.log({
                nota: this.rating,
                comentario: this.comment,
            });
            alert("Avaliação enviada com sucesso!");
            this.rating = 0;
            this.comment = "";
        },
    },
};
</script>

<style scoped>
.star-rating {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.rating-value {
    margin-top: 0.5rem;
    font-weight: bold;
}

.comment-box {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
}
</style>