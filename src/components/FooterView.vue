<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'FooterView',
    components: {
        RouterLink, RouterView
    },
  data: function () {
    return {
      user: null,
      dadosManipulando: {}
    }
  },
  computed: {},
  methods: {},
  mounted: function () {}
}
</script>

<template>
    <footer class="rodape" id="contato">
        <div class="rodape-div">
            <div class="rodape-div-1">
                <div class="rodape-div-1-coluna">
                    <span><b>LOGO</b></span>
                    <p>SIA Trecho 5 lote 000 bloco z sala 900 - Guará, Brasília - DF, 70000-010</p>
                </div>
            </div>
            <div class="rodape-div-2">
                <div class="rodape-div-2-coluna">
                    <span><b>Contatos</b></span>
                    <p>contato@na.na</p>
                    <p>+55 63 99200-0000</p>
                </div>
            </div>
            <div class="rodape-div-3">
                <div class="rodape-div-3-coluna">
                    <span><b>Links</b></span>
                    <p><a href="#servicos">Serviços</a></p>
                    <p><a href="#empresa">Empresa</a></p>
                    <p><a href="#sobre">Sobre</a></p>
                </div>
            </div>
            <div class="rodape-div-4">
                <div class="rodape-div-4-coluna">
                    <span><b>Outros</b></span>
                    <p><a href="#">Políticas de Privacidade</a></p>
                </div>
            </div>
        </div>
        <p class="rodape-direitos">Copyright © 2023 – Todos os Direitos Reservados.</p>
    </footer>
</template>

<style scoped>
.rodape {
    background-color: #48A3BF;
    color: white;
    width: 100%;
    font-size: 14px;
    font-family: helvetica, sans-serif;
}

.rodape a {
    text-decoration: none;
    color: #FFD700; 
}

.rodape a:hover {
    color: #ffeb3b; 
}

.rodape p {
    margin-bottom: 5px;
}

.rodape-div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    align-items: flex-start; 
    padding: 60px 10px 40px 10px;
}

.rodape-div-1, .rodape-div-2, .rodape-div-3, .rodape-div-4 {
    display: flex;
    flex-direction: column; 
    width: calc(100% / 4 - 20px);
    padding: 10px;
}

.rodape span {
    font-size: 20px;
    color: white;
}

.rodape-direitos {
    width: calc(100% - 20px);
    background-color: black;
    padding: 10px;
    margin: 0;
    text-align: center;
}
</style>
