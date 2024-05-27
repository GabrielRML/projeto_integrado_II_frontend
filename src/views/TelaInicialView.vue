<template>
  <div>
    <div class="pagina-branca">
      <h1 style="border: 2px solid #000000; margin-top: 40px; margin-left: 250px; display: inline-block; padding: 5px 10px; border-radius: 10px;">
        Quem Somos Nós?
      </h1>

      <div style="border: 2px solid #000000; margin-top: 20px;margin-left: 250px;margin-right: 250px;padding: 10px; border-radius: 10px;" class="text-2">
        <h4 class="h3-text text-center" >
          Somos à ClinicalLink, onde a saúde mental é nossa prioridade número um. Temos uma equipe de profissionais dedicados, comprometidos em fornecer suporte emocional de alta qualidade e acessível a todos.
          <br><br>
          Nossa missão é tornar o cuidado psicológico mais acessível, eliminando barreiras físicas e financeiras. 
          <br><br>
          Acreditamos que todos merecem apoio emocional e estamos aqui para oferecer uma plataforma segura e acolhedora para aqueles que buscam ajuda.
        </h4>
      </div>

      <div class="ia-integrada text-center" style="margin-top: 150px; margin-bottom: 40px;">
        <div class="linha-esquerda"></div> <!-- Linha à esquerda -->
        <span>IA integrada em consultas</span>
        <div class="linha-direita"></div> <!-- Linha à direita -->
      </div>

      <div>
        <h1 class="IA-text" style="border: 2px solid black; margin-left: 570px; display: inline-block; padding: 5px 10px; border-radius: 10px; margin-top: 15px;">Como funciona?</h1>
        <div id="text-4" style="display: flex; align-items: center;">
          <img src="../../public/image/ia.jpg" alt="Ia" style="width: 400px; margin-left: 150px;">
          <h4 id="text" class="text-ia text-center" style="border: 2px solid black; word-wrap: break-word; margin-right: 210px;padding: 10px; border-radius: 10px; margin-left: 20px;">
            Durante a consulta por vídeo, nossa IA analisa linguagem corporal, tom de voz e expressões faciais para entender suas emoções e necessidades.
            <br><br>
            Após a sessão, a IA gera automaticamente destaques importantes, como insights e mudanças emocionais, em um resumo personalizado.
            <br><br>
            Esses destaques ajudam você a relembrar os pontos essenciais discutidos e oferecem recomendações personalizadas para seu progresso emocional.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ia-integrada {
  text-align: center;
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

.pagina-branca {
  background-color: white;
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
