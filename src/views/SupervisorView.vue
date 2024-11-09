<template>
  <navBarView></navBarView>
  <div class="text-alunos text-lg-center" style="margin-top: 10px; color: powderblue;">
    <h1>Universitários</h1>
  </div>

  <div v-for="termo in termos" :key="termo.nome" class="container" style="margin-top: 80px;">
    <h1 class="text-alunos text-lg-center" style="margin-top: 10px; color: black;">{{ termo.nome }}</h1>
    <div class="row">
      <div class="col-md-3" v-for="aluno in alunosPorTermo(termo.nome)" :key="aluno.nome">
        <div class="card" @click="abrirModal(aluno)">
          <img :src="aluno.imagem" alt="" style="margin-top: 10px;">
          <div class="card-body">
            <h5 class="card-title">{{ aluno.nome }}</h5>
            <p class="card-text">{{ aluno.curso }}</p>
            <div class="rating">
              <h8>Feedbacks:</h8>
              <i v-for="star in 5" :key="star" :class="star <= aluno.estrelas ? 'fas fa-star' : 'far fa-star'"></i>
            </div>
            <div class="people-count">
              <i class="fas fa-user-friends"></i> {{ aluno.amigos }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="alunoSelecionado" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Resumo de {{ alunoSelecionado.nome }}</h5>
          <button type="button" class="btn-close" @click="fecharModal"></button>
        </div>
        <div class="modal-body">
          <h6>Consultas:</h6>
          <ul>
            <li v-for="consulta in alunoSelecionado.consultas" :key="consulta">{{ consulta }}</li>
          </ul>
          <h6>Avaliações:</h6>
          <ul>
            <li v-for="avaliacao in alunoSelecionado.avaliacoes" :key="avaliacao">
              <div class="rating">
                <i v-for="star in 5" :key="star" :class="star <= alunoSelecionado.estrelas ? 'fas fa-star' : 'far fa-star'"></i>
              </div>
              {{ avaliacao }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="fecharModal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBarView from '../components/navBarView.vue';

export default {
  components: {
    navBarView
  },
  data() {
    return {
      alunos:[
  { nome: 'Paula Oliveira', curso: 'Psicologia 1º termo', estrelas: 3, amigos: 42, imagem: '../../public/image/avatar-1.png', consultas: ['Consulta inicial - 03/11/2024', 'Consulta de acompanhamento - 06/11/2024', 'Consulta sobre autoestima - 09/11/2024', 'Sessão sobre habilidades sociais - 12/11/2024'], avaliacoes: ['Cliente apresenta dificuldades em iniciar interações sociais.', 'Cliente precisa trabalhar sua confiança em situações sociais.', 'A comunicação com o cliente está se tornando mais fluida.', 'Progressos na redução da ansiedade social observados.'] },
  { nome: 'Gabriel Souza', curso: 'Psicologia 1º termo', estrelas: 4, amigos: 12, imagem: '../../public/image/avatar-3.png', consultas: ['Consulta inicial - 03/11/2024', 'Consulta de feedback - 07/11/2024', 'Sessão de desenvolvimento pessoal - 10/11/2024', 'Consulta sobre relacionamentos interpessoais - 13/11/2024'], avaliacoes: ['Cliente mostra abertura para mudanças no comportamento social.', 'Cliente tem evoluído bem nas suas relações sociais.', 'Ainda apresenta dificuldades em manter relações interpessoais profundas.', 'O cliente tem dificuldades para expressar sentimentos nas interações sociais.'] },
  { nome: 'Joana Almeida', curso: 'Psicologia 1º termo', estrelas: 1, amigos: 46, imagem: '../../public/image/avatar-2.png', consultas: ['Consulta inicial - 03/11/2024', 'Sessão de apoio emocional - 06/11/2024', 'Consulta sobre identidade pessoal - 09/11/2024', 'Sessão sobre relações familiares - 12/11/2024'], avaliacoes: ['Cliente expressa baixa autoestima e dificuldades em se relacionar.', 'Dificuldade em lidar com críticas de outras pessoas.', 'Cliente ainda está se adaptando a mudanças pessoais importantes.', 'Cliente precisa de mais apoio emocional para lidar com questões familiares.'] },
  { nome: 'Melissa Costa', curso: 'Psicologia 1º termo', estrelas: 2, amigos: 15, imagem: '../../public/image/avatar-4.png', consultas: ['Consulta inicial - 03/11/2024', 'Sessão de orientação sobre relações sociais - 06/11/2024', 'Consulta sobre autocuidado - 09/11/2024', 'Sessão sobre resolução de conflitos - 12/11/2024'], avaliacoes: ['Cliente enfrenta dificuldades para manter interações com colegas.', 'Ainda há dificuldades para expressar as emoções de maneira aberta.', 'A cliente tem tentado melhorar sua comunicação interpessoal.', 'Há um progresso notável na resolução de conflitos internos.'] },

  { nome: 'Fernanda Pereira', curso: 'Psicologia 2º termo', estrelas: 5, amigos: 38, imagem: '../../public/image/avatar-2.png', consultas: ['Consulta de desenvolvimento pessoal - 05/12/2024', 'Sessão de autoconhecimento - 07/12/2024', 'Consulta sobre liderança - 09/12/2024', 'Sessão de autoestima - 12/12/2024'], avaliacoes: ['Cliente demonstrou grande progresso em suas habilidades de comunicação.', 'Evolução significativa no gerenciamento de suas emoções.', 'Cliente começa a assumir mais responsabilidades em grupos sociais.', 'Houve grande melhora na forma como o cliente se percebe.'] },
  { nome: 'Ricardo Oliveira', curso: 'Psicologia 2º termo', estrelas: 3.5, amigos: 22, imagem: '../../public/image/avatar-3.png', consultas: ['Consulta de acompanhamento - 08/12/2024', 'Sessão sobre gestão emocional - 10/12/2024', 'Consulta de feedback - 12/12/2024', 'Sessão sobre postura profissional - 14/12/2024'], avaliacoes: ['Cliente se mostra mais confiante, mas ainda lida com momentos de insegurança.', 'Avanços na forma de lidar com situações de estresse, mas algumas dificuldades permanecem.', 'A cliente ainda precisa melhorar a postura profissional em ambientes de trabalho.', 'Observamos crescimento no controle emocional em situações de pressão.'] },
  { nome: 'Juliana Martins', curso: 'Psicologia 2º termo', estrelas: 4, amigos: 55, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão de autoconhecimento - 10/12/2024', 'Consulta sobre relacionamentos - 12/12/2024', 'Sessão de autoestima - 14/12/2024', 'Consulta de apoio emocional - 16/12/2024'], avaliacoes: ['Cliente tem se mostrado mais consciente de suas limitações e potencialidades.', 'Desenvolvimento significativo em suas habilidades emocionais.', 'Cliente tem demonstrado evolução nas suas interações sociais.', 'A cliente sente que ainda precisa trabalhar mais questões de autoconfiança.'] },
  { nome: 'André Silva', curso: 'Psicologia 2º termo', estrelas: 2, amigos: 31, imagem: '../../public/image/avatar-3.png', consultas: ['Consulta de autoimagem - 12/12/2024', 'Sessão de inteligência emocional - 14/12/2024', 'Consulta sobre autoestima - 16/12/2024', 'Sessão sobre identificação de padrões de comportamento - 18/12/2024'], avaliacoes: ['Cliente demonstrou frustração ao lidar com questões de autoestima.', 'Emoções difíceis de identificar e expressar de forma clara.', 'Cliente tem dificuldades em identificar padrões de comportamentos negativos em si.', 'Progresso observado na identificação de comportamentos autodestrutivos.'] },

  { nome: 'Maria Souza', curso: 'Psicologia 3º termo', estrelas: 4.5, amigos: 78, imagem: '../../public/image/avatar-1.png', consultas: ['Sessão de orientação vocacional - 15/09/2024', 'Consulta de autoconhecimento - 18/09/2024', 'Sessão sobre metas de vida - 21/09/2024', 'Consulta de acompanhamento emocional - 24/09/2024'], avaliacoes: ['Cliente se sentiu motivada e clara em relação ao seu futuro profissional.', 'Começou a entender melhor seus objetivos pessoais e profissionais.', 'Evolução na percepção de seu futuro e plano de carreira.', 'Melhora no equilíbrio entre vida pessoal e profissional observada.'] },
  { nome: 'Eduardo Costa', curso: 'Psicologia 3º termo', estrelas: 5, amigos: 66, imagem: '../../public/image/avatar-3.png', consultas: ['Consulta de desenvolvimento profissional - 16/09/2024', 'Sessão sobre liderança - 18/09/2024', 'Consulta sobre habilidades interpessoais - 20/09/2024', 'Sessão sobre networking - 22/09/2024'], avaliacoes: ['Cliente revela maior clareza nos seus objetivos profissionais.', 'Progresso significativo nas suas habilidades de liderança e comunicação.', 'O cliente tem melhorado sua rede de contatos profissionais.', 'Habilidades de networking bem desenvolvidas, grande evolução.'] },
  { nome: 'Carla Lima', curso: 'Psicologia 3º termo', estrelas: 4, amigos: 82, imagem: '../../public/image/avatar-2.png', consultas: ['Consulta de terapia cognitivo-comportamental - 18/09/2024', 'Sessão sobre controle emocional - 21/09/2024', 'Consulta sobre ansiedade - 24/09/2024', 'Sessão de desenvolvimento pessoal - 26/09/2024'], avaliacoes: ['Cliente demonstrou um bom progresso na redução de sintomas de ansiedade.', 'O cliente se mostra mais calmo e centrado nas situações estressantes.', 'A cliente tem mostrado sinais de maior equilíbrio emocional.', 'A ansiedade do cliente tem diminuído consideravelmente após a terapia.'] },
  { nome: 'Felipe Santos', curso: 'Psicologia 3º termo', estrelas: 3, amigos: 59, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão de ajustes de metas de vida - 20/09/2024', 'Consulta sobre percepção de si - 23/09/2024', 'Sessão sobre estresse - 25/09/2024', 'Consulta de feedback profissional - 28/09/2024'], avaliacoes: ['Cliente expressa vontade de mudar, mas não sente progresso significativo.', 'A cliente está em busca de novas perspectivas, mas sem uma definição clara.', 'Há uma dificuldade em focar nos aspectos positivos do próprio desenvolvimento.', 'Progresso no enfrentamento do estresse, mas ainda há desafios.'] },

  { nome: 'Lucas Pereira', curso: 'Psicologia 4º termo', estrelas: 2, amigos: 40, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão para dificuldades familiares - 02/10/2024', 'Consulta sobre conflito de valores - 05/10/2024', 'Sessão sobre relacionamento com os pais - 07/10/2024', 'Consulta sobre autoestima - 10/10/2024'], avaliacoes: ['Cliente luta contra sentimentos de desvalorização familiar.', 'Ainda lida com conflitos internos em relação à identidade pessoal.', 'Relutante em aceitar os limites impostos pelos pais.', 'O cliente ainda não conseguiu melhorar sua autoestima de maneira significativa.'] },
  { nome: 'Patricia Fernandes', curso: 'Psicologia 4º termo', estrelas: 4.5, amigos: 65, imagem: '../../public/image/avatar-2.png', consultas: ['Sessão de desenvolvimento de carreira - 10/10/2024', 'Consulta sobre feedback profissional - 13/10/2024', 'Sessão de liderança - 15/10/2024', 'Consulta sobre habilidades sociais - 17/10/2024'], avaliacoes: ['Cliente demonstra uma postura mais assertiva e madura em relação à carreira.', 'Ela está mais aberta a receber feedbacks e utilizar para seu crescimento profissional.', 'Progresso visível em suas habilidades de liderança e relacionamento profissional.', 'Cliente mostrou maior confiança nas suas interações com colegas.'] },
  { nome: 'Tiago Martins', curso: 'Psicologia 4º termo', estrelas: 5, amigos: 70, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão sobre ansiedade - 11/10/2024', 'Consulta sobre procrastinação - 13/10/2024', 'Sessão sobre organização - 16/10/2024', 'Consulta sobre controle de estresse - 19/10/2024'], avaliacoes: ['Cliente demonstrou avanços significativos no controle de ansiedade.', 'Progresso na organização pessoal, apesar de algumas dificuldades.', 'Cliente com controle de estresse melhorado, mais focado nas tarefas.', 'Percebe-se um grande avanço no gerenciamento do tempo e das tarefas.'] },
  { nome: 'Roberta Silva', curso: 'Psicologia 4º termo', estrelas: 3.5, amigos: 55, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão de apoio emocional - 15/10/2024', 'Consulta sobre autoimagem - 17/10/2024', 'Sessão sobre relacionamentos interpessoais - 19/10/2024', 'Consulta sobre desenvolvimento pessoal - 21/10/2024'], avaliacoes: ['Cliente em busca de melhorar sua autoimagem e autoestima.', 'Ainda lida com dificuldades para se conectar com os outros de maneira genuína.', 'A cliente teve uma evolução no entendimento sobre seus relacionamentos interpessoais.', 'Progresso nas metas de desenvolvimento pessoal foi lento, mas contínuo.'] },

  { nome: 'Andréa Costa', curso: 'Psicologia 5º termo', estrelas: 4, amigos: 58, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão sobre terapia familiar - 01/11/2024', 'Consulta de mediação de conflitos - 03/11/2024', 'Sessão de análise de relacionamento - 05/11/2024', 'Consulta sobre dinâmica de grupo - 07/11/2024'], avaliacoes: ['Cliente lida com conflitos familiares e busca maior harmonia em casa.', 'Progresso na mediação de conflitos entre familiares, embora ainda haja resistência.', 'Melhora na percepção das dinâmicas familiares e a sua própria atuação nelas.', 'Cliente apresenta maior habilidade para resolver conflitos familiares de forma construtiva.'] },
  { nome: 'Isabela Lima', curso: 'Psicologia 5º termo', estrelas: 4.5, amigos: 74, imagem: '../../public/image/avatar-2.png', consultas: ['Sessão sobre comunicação interpessoal - 02/11/2024', 'Consulta sobre autoconfiança - 04/11/2024', 'Sessão sobre comportamento social - 06/11/2024', 'Consulta de feedback profissional - 08/11/2024'], avaliacoes: ['Cliente tem mostrado grande capacidade de comunicação e autoestima.', 'A cliente lida bem com críticas e utiliza para seu desenvolvimento.', 'A comunicação interpessoal dela está fluindo de maneira mais natural e eficaz.', 'Confiança em suas habilidades sociais e profissionais tem aumentado consideravelmente.'] },
  { nome: 'Márcio Alves', curso: 'Psicologia 5º termo', estrelas: 3, amigos: 60, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão sobre orientação de carreira - 01/11/2024', 'Consulta sobre relações interpessoais - 03/11/2024', 'Sessão sobre desenvolvimento de habilidades sociais - 05/11/2024', 'Consulta sobre inteligência emocional - 07/11/2024'], avaliacoes: ['Cliente tem lidado com dificuldades em suas relações interpessoais.', 'Ainda demonstra insegurança na comunicação com os outros.', 'Apesar das dificuldades, a cliente tem mostrado evolução na interação social.', 'Melhorias observadas no controle emocional, mas ainda com desafios.'] },
  { nome: 'Tatiane Ferreira', curso: 'Psicologia 5º termo', estrelas: 2.5, amigos: 40, imagem: '../../public/image/avatar-4.png', consultas: ['Consulta sobre habilidades emocionais - 02/11/2024', 'Sessão sobre relação com pais - 04/11/2024', 'Consulta de acompanhamento psicológico - 06/11/2024', 'Sessão sobre controle de frustração - 08/11/2024'], avaliacoes: ['Cliente lida com dificuldades em expressar suas emoções e sentimentos.', 'Progresso em lidar com frustração, mas ainda há altos e baixos.', 'A cliente parece resistente a mudanças no comportamento familiar.', 'Houve alguma evolução nas habilidades emocionais, mas o progresso é lento.'] },

  { nome: 'Ricardo Oliveira', curso: 'Psicologia 6º termo', estrelas: 3.5, amigos: 83, imagem: '../../public/image/avatar-3.png', consultas: ['Consulta sobre análise de comportamento - 12/11/2024', 'Sessão sobre controle de stress - 14/11/2024', 'Consulta de orientação de carreira - 16/11/2024', 'Sessão sobre crescimento pessoal - 18/11/2024'], avaliacoes: ['Cliente tem mostrado melhorias no controle de estresse, mas alguns gatilhos ainda são um desafio.', 'Progresso na análise de comportamento e identificação de padrões negativos.', 'Embora o cliente esteja mais centrado, algumas dificuldades profissionais permanecem.', 'O cliente tem demonstrado um crescimento contínuo nas suas estratégias de enfrentamento.'] },
  { nome: 'Roberta Mendes', curso: 'Psicologia 6º termo', estrelas: 5, amigos: 90, imagem: '../../public/image/avatar-2.png', consultas: ['Sessão sobre assertividade - 13/11/2024', 'Consulta sobre relações amorosas - 15/11/2024', 'Sessão sobre comunicação não-violenta - 17/11/2024', 'Consulta sobre metas de vida - 19/11/2024'], avaliacoes: ['Cliente se mostrou mais assertiva em suas relações sociais e amorosas.', 'Melhorias na comunicação não-violenta, mais empatia nas interações.', 'Desenvolvimento significativo nas metas de vida, com foco e direção claros.', 'A cliente tem mostrado grande confiança nas suas decisões e relações pessoais.'] },
  { nome: 'Bruna Santana', curso: 'Psicologia 6º termo', estrelas: 4, amigos: 60, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão sobre carreira e autoestima - 13/11/2024', 'Consulta sobre ansiedade social - 15/11/2024', 'Sessão sobre desenvolvimento de habilidades sociais - 17/11/2024', 'Consulta de feedback emocional - 19/11/2024'], avaliacoes: ['A cliente apresenta grandes melhorias na autopercepção profissional.', 'Avanços na redução da ansiedade social, mais confiante nas interações.', 'Apesar de inseguranças, a cliente tem mostrado mais habilidade nas relações sociais.', 'Melhorias nas respostas emocionais observadas nas interações sociais.'] },
  { nome: 'Juliano Silva', curso: 'Psicologia 6º termo', estrelas: 2, amigos: 42, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão de avaliação emocional - 12/11/2024', 'Consulta sobre dificuldades com relacionamento - 14/11/2024', 'Sessão sobre controle de impulsos - 16/11/2024', 'Consulta sobre autoestima - 18/11/2024'], avaliacoes: ['Cliente lida com dificuldades em controlar impulsos emocionais.', 'Dificuldade em expressar emoções de maneira saudável e construtiva.', 'A cliente parece ter dificuldades em manter relacionamentos estáveis.', 'Progresso no controle de impulsos, mas ainda com desafios significativos.'] },

  { nome: 'Helena Costa', curso: 'Psicologia 7º termo', estrelas: 5, amigos: 78, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão sobre autoconhecimento e carreira - 11/12/2024', 'Consulta sobre expectativas de vida - 13/12/2024', 'Sessão sobre equilíbrio emocional - 15/12/2024', 'Consulta sobre relacionamentos interpessoais - 17/12/2024'], avaliacoes: ['Cliente lida bem com expectativas e busca maior equilíbrio emocional.', 'Progresso significativo na comunicação interpessoal e nos relacionamentos afetivos.', 'Avanços na percepção de seu futuro profissional e pessoal.', 'A cliente está mais equilibrada e confiante em suas decisões de vida.'] },
  { nome: 'Marcelo Araújo', curso: 'Psicologia 7º termo', estrelas: 4.5, amigos: 62, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão sobre liderança e comunicação - 10/12/2024', 'Consulta sobre gestão de conflitos - 12/12/2024', 'Sessão sobre feedback emocional - 14/12/2024', 'Consulta sobre habilidades de influência - 16/12/2024'], avaliacoes: ['Cliente tem se mostrado mais assertivo e com habilidades de liderança em progresso.', 'Progresso no gerenciamento de conflitos, mais focado em resultados positivos.', 'Feedback emocional recebido de forma construtiva, com mais autoconhecimento.', 'Cliente apresentou evolução nas suas habilidades de influenciar e motivar os outros.'] },
  { nome: 'Camila Rocha', curso: 'Psicologia 7º termo', estrelas: 3, amigos: 53, imagem: '../../public/image/avatar-1.png', consultas: ['Sessão sobre resiliência - 11/12/2024', 'Consulta sobre autoconfiança - 13/12/2024', 'Sessão sobre relacionamento interpessoal - 15/12/2024', 'Consulta sobre enfrentamento de adversidades - 17/12/2024'], avaliacoes: ['Cliente tem demonstrado um bom controle emocional em momentos de adversidade.', 'Dificuldade em manter relações interpessoais de forma construtiva.', 'Progresso nas questões de autoestima, mas ainda com dificuldades internas.', 'Habilidade para enfrentar adversidades está em evolução, mas ainda é desafiadora.'] },
  { nome: 'Paula Marques', curso: 'Psicologia 7º termo', estrelas: 4, amigos: 81, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão sobre desenvolvimento de carreira - 12/12/2024', 'Consulta sobre habilidades de liderança - 14/12/2024', 'Sessão sobre objetivos de vida - 16/12/2024', 'Consulta sobre desenvolvimento emocional - 18/12/2024'], avaliacoes: ['Cliente tem mostrado grande clareza sobre seus objetivos de vida e carreira.', 'Desenvolvimento significativo nas habilidades de liderança e tomada de decisões.', 'Cliente lida bem com desafios emocionais e se adapta facilmente a mudanças.', 'Percebe-se uma evolução consistente em relação ao equilíbrio emocional e profissional.'] },

  { nome: 'Marta Pires', curso: 'Psicologia 8º termo', estrelas: 4, amigos: 70, imagem: '../../public/image/avatar-2.png', consultas: ['Consulta sobre burnout e gestão de estresse - 21/12/2024', 'Sessão sobre desenvolvimento de habilidades de liderança - 23/12/2024', 'Consulta sobre objetivos pessoais e carreira - 25/12/2024', 'Sessão sobre autoconfiança e relações interpessoais - 27/12/2024'], avaliacoes: ['Cliente com sinais de burnout, em processo de adaptação e recuperação.', 'A cliente tem mostrado avanços nas habilidades de liderança e resolução de conflitos.', 'Progresso na definição de objetivos pessoais e na construção da carreira.', 'Habilidades interpessoais melhoraram, maior confiança nas relações com outros.'] },
  { nome: 'Fernanda Oliveira', curso: 'Psicologia 8º termo', estrelas: 4.5, amigos: 82, imagem: '../../public/image/avatar-4.png', consultas: ['Sessão sobre relacionamento amoroso - 22/12/2024', 'Consulta sobre habilidades sociais - 24/12/2024', 'Sessão sobre traumas do passado - 26/12/2024', 'Consulta sobre metas de vida - 28/12/2024'], avaliacoes: ['Cliente tem mostrado mais confiança em seus relacionamentos amorosos e pessoais.', 'Progresso nas interações sociais, mais aberta e receptiva.', 'A cliente está processando traumas antigos de maneira construtiva e saudável.', 'Ela tem trabalhado suas metas de vida com mais clareza e foco.'] },
  { nome: 'Vítor Silva', curso: 'Psicologia 8º termo', estrelas: 3.5, amigos: 67, imagem: '../../public/image/avatar-3.png', consultas: ['Sessão sobre depressão e autoestima - 22/12/2024', 'Consulta sobre comportamentos autodestrutivos - 24/12/2024', 'Sessão sobre ansiedade social - 26/12/2024', 'Consulta sobre habilidades emocionais - 28/12/2024'], avaliacoes: ['Cliente tem apresentado sinais de depressão, mas está lidando melhor com seus sentimentos.', 'Dificuldades no controle de comportamentos autodestrutivos, embora haja alguma evolução.', 'Progresso nas interações sociais, mas com receio em situações de grande pressão.', 'Avanços na inteligência emocional, embora a ansiedade social ainda seja um desafio.'] },
  { nome: 'Lúcia Costa', curso: 'Psicologia 8º termo', estrelas: 4.5, amigos: 79, imagem: '../../public/image/avatar-2.png', consultas: ['Sessão sobre resiliência e motivação - 21/12/2024', 'Consulta sobre relacionamentos familiares - 23/12/2024', 'Sessão sobre controle de emoções - 25/12/2024', 'Consulta sobre saúde mental e bem-estar - 27/12/2024'], avaliacoes: ['Cliente tem mostrado grande resiliência diante de dificuldades emocionais.', 'A cliente apresenta boa habilidade para resolver conflitos familiares de maneira positiva.', 'Controle de emoções tem melhorado significativamente, mais calma nas situações de estresse.', 'Progresso visível na saúde mental e no bem-estar geral da cliente.'] }
],
      termos: [
        { nome: 'Psicologia 1º termo' },
        { nome: 'Psicologia 2º termo' },
        { nome: 'Psicologia 3º termo' },
        { nome: 'Psicologia 4º termo' },
        { nome: 'Psicologia 5º termo' },
        { nome: 'Psicologia 6º termo' },
        { nome: 'Psicologia 7º termo' },
        { nome: 'Psicologia 8º termo' }
      ],
      alunoSelecionado: null
    };
  },
  methods: {
    abrirModal(aluno) {
      this.alunoSelecionado = aluno;
    },
    fecharModal() {
      this.alunoSelecionado = null;
    },
    alunosPorTermo(termoNome) {
      return this.alunos.filter(aluno => aluno.curso.includes(termoNome));
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
}

.box-search {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48A3BF;
  padding: 2rem 0;
}

body {
  background-color: #f5f5f5; /* cor clara para o fundo */
}

/* Adiciona o fundo para o conteúdo fora da navbar */
.container {
  background-color: #f5f5f5; /* A mesma cor do body */
}

.container-info-prestador {
  background-color: white;
  border-radius: 10px;
}
</style>
