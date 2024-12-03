<template>
  <NavBarView>

  </NavBarView>
    <div class="card">
      <TabView>
        <TabPanel header="Consultas">
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                </template>
                <template #title>João Silva</template>
                <template #subtitle>Data: 10/12/2024 | Hora: 14:00</template>
                <template #content>
                  <p class="m-0">
                    João Silva deseja se consultar com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Cancelar" severity="secondary" outlined class="w-full" />
                    <Button label="Confirmar" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar4.png" />
                </template>
                <template #title>Caio Souza</template>
                <template #subtitle>Data: 11/12/2024 | Hora: 10:00</template>
                <template #content>
                  <p class="m-0">
                    Caio Souza deseja se consultar com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Cancelar" severity="secondary" outlined class="w-full" />
                    <Button label="Confirmar" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                </template>
                <template #title>Cássio Ramos</template>
                <template #subtitle>Data: 20/12/2024 | Hora: 15:00</template>
                <template #content>
                  <p class="m-0">
                    Cássio Ramos deseja se consultar com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Cancelar" severity="secondary" outlined class="w-full" />
                    <Button label="Confirmar" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                </template>
                <template #title>Bruna Liberato</template>
                <template #subtitle>Data: 20/12/2024 | Hora: 15:00</template>
                <template #content>
                  <p class="m-0">
                    Bruna Liberato agendou uma consulta com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Consulta Confirmada" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                </template>
                <template #title>Pedro Henrique</template>
                <template #subtitle>Data: 03/01/2024 | Hora: 15:00</template>
                <template #content>
                  <p class="m-0">
                    Pedro Henrique agendou uma consulta com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Consulta Confirmada" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar8.png"  />
                </template>
                <template #title>Vanessa Souza</template>
                <template #subtitle>Data: 21/12/2024 | Hora: 10:30</template>
                <template #content>
                  <p class="m-0">
                    Vanessa Souza agendou uma consulta com você.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Consulta Confirmada" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </TabPanel>
  

        <TabPanel header="Histórico de Consultas">
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                </template>
                <template #title>João Silva</template>
                <template #subtitle>Data: 15/11/2024 | Hora: 16:00</template>
                <template #content>
                  <p class="m-0">
                    João Silva participou de uma consulta para tratar questões de estresse relacionado ao trabalho. Estratégias para lidar com os desafios foram discutidas.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Ver Detalhes" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar5.png" />
                </template>
                <template #title>Felipe Almeida</template>
                <template #subtitle>Data: 05/11/2024 | Hora: 13:00</template>
                <template #content>
                  <p class="m-0">
                    Felipe Almeida participou de uma consulta para discutir questões relacionadas à gestão do tempo e aumento da produtividade no trabalho.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Ver Detalhes" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
            <div class="col-12 md:col-6 lg:col-4">
              <Card style="width: 25rem; overflow: hidden">
                <template #header>
                  <img alt="user header" src="https://bootdey.com/img/Content/avatar/avatar6.png"  />
                </template>
                <template #title>Jorge Sampaio</template>
                <template #subtitle>Data: 20/11/2024 | Hora: 09:00</template>
                <template #content>
                  <p class="m-0">
                    Durante a consulta anterior, Jorge Sampaio discutiu suas preocupações sobre a ansiedade social, com foco na construção de habilidades para enfrentamento.
                  </p>
                </template>
                <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Ver Detalhes" class="w-full" />
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  </template>
  
  <script>
        import NavBarView from '@/components/navBarView.vue';
        export default {
          components: {
          NavBarView
        },
          data: function () {
          return {
        }
      },
      computed: {
      },
      methods: {
      },
      mounted: function () {}
    }
 
  </script>
  
  <style scoped>
  .card {
    margin: 20px;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  
  .col-12 {
    width: 100%;
  }
  
  .md\:col-6 {
    width: 30%;
  }
  
  .lg\:col-4 {
    width: 26%;
  }
  
  .card .p-card-title {
    font-weight: bold;
  }
  
  .card .p-card-subtitle {
    color: #777;
  }
  
  .card .p-card-footer {
    display: flex;
    justify-content: space-between;
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 60%;
  }
  </style>
  
  

  