<template>
  <div style="overflow-y: auto; max-height: 100vh;">
    <navBarView></navBarView>
    <div class="pagina-white">
      <div style="display: flex; align-items: center; justify-content: space-between; margin: 0px 100px 0 140px;margin-right: 10px;">
        <div style="max-width: 40%;">
          <h1 style="padding: 2px 10px;font-size: 60px;color: black;margin-top: 70px;">
            Psicólogos online ao seu alcance
          </h1>
          <h4 style="margin-top: 30px; color: grey;">
            Agora você pode conversar com um psicólogo online a qualquer hora e qualquer lugar com segurança através da nossa plataforma
          </h4>
          <button style="margin-top: 80px; padding: 10px 20px; font-size: 35px; color: white; background-color: #48A3BF; border: none; border-radius: 10px; cursor: pointer;">
            Agende sua consulta
          </button>
        </div>
        <img src="../../public/image/3.png" alt="capa" style="max-width: 60%;margin-top: 110px;">
      </div>

      <div class="pagina-blue" style="height: 500px; border-radius: 0px; display: flex; align-items: center; padding: 20px;margin-top: 130px;">
        <img class="image-nos" src="../../public/image/people.png" style="max-width: 20%; margin-right: 30px;margin-left: 50px;">
        <div style="padding: 20px; border-radius: 10px; color: white; flex: 1;">
          <h1 class="h1-center text-center" style="margin-bottom: 45px; color: white;">
            Quem somos nós?
          </h1>
          <h4 class="h3-text" style="font-size: 26px; text-align: left;">
            Somos à ClinicalLink, onde a saúde mental é nossa prioridade número um. Temos uma equipe de profissionais dedicados, comprometidos em fornecer suporte emocional de alta qualidade e acessível a todos.
            <br><br>
            Nossa missão é tornar o cuidado psicológico mais acessível, eliminando barreiras físicas e financeiras. 
            <br><br>
            Acreditamos que todos merecem apoio emocional e estamos aqui para oferecer uma plataforma segura e acolhedora para aqueles que buscam ajuda.
          </h4>
        </div>
      </div>

      <div class="pagina-planos">
        <div class="ia-integrada text-center" style="margin-top: 35px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center; flex-wrap: wrap;padding: 100px;">
          <div class="linha-esquerda"></div>
          <span style="font-size: 40px;">Nossos serviços</span>
          <div class="linha-direita"></div>

          <div class="card-standard" style="width: 25rem;margin: 40px 30px; border: 2px solid #000; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
            <div class="card-body">
              <img src="../../public/image/laptop.png" alt="capa" style="max-width: 17%;margin-top: 10px;">
              <h5 class="card-title" style="font-size: 26px;margin-top: 25px; color: #000;">Standard</h5>
              <h6 class="card-subtitle" style="font-size: 40px; margin-top: 10px; color: #1bb2e0;">R$ 9,99/mês</h6>
              <ul class="card-text" style="font-size: 21px; list-style-type: disc; padding-left: 20px;margin-top: 65px; color: #000;">
                <li style="margin-left: 20px;">Limite de 2 consultas no mês</li>
                <li style="margin-left: 20px;">Acesso a universitários</li>
              </ul>
              <button style="margin-top: 10px;margin-bottom: 40px; padding: 10px 20px; font-size: 30px; color: white; background-color: #48A3BF; border: none; border-radius: 5px; cursor: pointer;">
                Inscreva-se
              </button>
            </div>
          </div>

          <div class="card-premium" style="width: 25rem;margin: 40px 30px; border: 2px solid #000; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
            <div class="card-body">
              <img src="../../public/image/chat.png" alt="capa" style="max-width: 17%;margin-top: 10px;">
              <h5 class="card-title" style="font-size: 26px;margin-top: 25px; color: #000;">Premium</h5>
              <h6 class="card-subtitle" style="font-size: 40px; margin-top: 10px; color: #1bb2e0;">R$ 99,99/mês</h6>
              <ul class="card-text" style="font-size: 21px; list-style-type: disc; padding-left: 20px;margin-top: 65px; color: #000;">
                <li style="margin-left: 20px;">Consultas ilimitadas</li>
                <li style="margin-left: 20px;">Acesso a universitários e especialistas</li>
                <li style="margin-left: 20px;">Prioridade no atendimento</li>
                <li style="margin-left: 20px; margin-bottom: 50px;">Resumo das consultas por IA</li>
              </ul>
              <button style="margin-top: 10px;margin-bottom: 65px; padding: 10px 20px; font-size: 30px; color: white; background-color: #48A3BF; border: none; border-radius: 5px; cursor: pointer;">
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
  
        <div class="pagina-blue-2" style="height: 500px; display: flex; align-items: center; padding: 20px; background-color: #48A3BF;">
          <div style="color: white; flex: 1; margin-left: 60px;">
            <h1 style="margin-bottom: 45px; color: white;">Inteligência artificial nas consultas!</h1>
            <p style="font-size: 26px;">
              Durante a consulta por vídeo, nossa IA analisa linguagem corporal, tom de voz e expressões faciais para entender suas emoções e necessidades.
              <br><br>
              Após a sessão, a IA gera automaticamente destaques importantes, como insights e mudanças emocionais, em um resumo personalizado.
              <br><br>
              Esses destaques ajudam você a relembrar os pontos essenciais discutidos e oferecem recomendações personalizadas para seu progresso emocional.
            </p>
          </div>
          <img src="../../public/image/ia.png" alt="IA" style="max-width: 20%; margin: 0 30px;">
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
import navBarView from '../components/navBarView.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    navBarView
  },
  data: function () {
    return {};
  },
  computed: {},
  methods: {},
  mounted: function () {}
}
</script>



>>>>>>> Stashed changes
<style scoped>
.navbar {
  color: rgba(72, 163, 191, 0.481);
}
.bg-info{
  color: #48A3BF;
}

.nav-link.text-center {
  font-size: xx-large;
  display: flex;
  color: aliceblue;
  align-items: center;
  justify-content: center;
}

.ia-integrada {
  text-align: center;
  color: #1bb2e0;
}

.linha-esquerda {
  width: 30vw;
  border-bottom: 2px solid #3f3c3c;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px; /* Espaçamento à direita para separar do texto */
}

.linha-direita {
  width: 30vw;
  border-bottom: 2px solid #3f3c3c;
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px; /* Espaçamento à esquerda para separar do texto */
}

.pagina-white {
  background-color: white;
}
.pagina-blue{
  margin-top: 30px;
  background-color: #48A3BF;
}
.pagina-blue-2{
  background-color: #48A3BF;
}
.text-2 {
  margin-top: 20px;
  margin-left: 330px;
  margin-right: 90px;
  padding: 10px;
  border-radius: 10px;
}

.ia-integrada {
  margin-top: 150px;
  margin-bottom: 80px;
}

.IA-text {
  border: 2px solid black;
  margin-left: 350px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
}

.text-ia {
  border: 2px solid black;
  word-wrap: break-word;
  margin-right: 90px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 20px;
}
</style>
