<template>
  <div>
    <nav>
      <div class="navbar navbar-expand-lg bg-info border-bottom border-body" style="height: 130px;">
        <div to="/" class="navbar-brand" style="margin-left: 100px;">
          <img src="../../public/logoSemFundo.svg" class="logo larger-image" alt="logo" style="margin-left: 30px; margin-top: 5px; width: 175px;">
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <h1 to="/" class="nav-link text-center" style="border-bottom: 3px solid #F0f0f0f0;">Pagina Inicial</h1>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <button type="button"  to="/login"class="btn btn-light mx-0" onclick="window.location.href='/login'">Login</button>
            </li>
            <li class="nav-item">
              <button to="/cadastro" class="btn mx-4" onclick="window.location.href='/cadastroUser'" style="background-color: #48A3BF; color: white;">Cadastro</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
.navbar {
  color: rgba(72, 163, 191, 0.481);
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
