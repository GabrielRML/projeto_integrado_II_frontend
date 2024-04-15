<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

export default {
  components: {
    RouterLink, RouterView
  },
  data: function () {
    return {
        varValida: 0,
        dadosManipulando:{
            NOMECOMPLETO: null,
            EMAIL: null,
            SENHA: null,
            CONFIRMARSENHA: null,
        }
    }
  },
  computed: {
  },
  methods: {
    buttonPsicologo(){
        this.varValida = 1
    },

    buttonUniversitario(){
        this.varValida = 0
    }
  },
  mounted: function () {
  }
}
</script>

<template>

  <section class="vh-100 d-flex align-items-center">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">


        <div class="tituloLoginCad">
            <h1 style="font-size: 50px;">ClinicalLink</h1>
        </div>

        <div class="col-md-5 col-lg-5 col-xl-5 offset-xl-1">

            <!-- formPaciente -->
            <form v-show="varValida == 0">

                <div class="form-outline mb-4">
                    <div class="row">
                            <label class="form-label" for="nome">Nome Completo</label>
                            <input v-model="dadosManipulando.EMAIL" type="text" class="form-control form-control-lg"
                                placeholder="Nome Completo:"/>
                            <label class="form-label" for="email">Email:</label>
                            <input v-model="dadosManipulando.SENHA" type="email" class="form-control form-control-lg"
                                placeholder="Email:"/>
                    </div>
                </div>
                
                <div class="form-outline mb-3">
                    <div class="row">
                        <div class="col">
                            <label class="form-label" for="senha">Senha</label>
                            <input v-model="dadosManipulando.SENHA" type="password" class="form-control form-control-lg"
                                placeholder="Senha:"/>
                        </div>
                        <div class="col">
                            <label class="form-label" for="confirmarSenha">Confirme sua senha</label>
                            <input v-model="dadosManipulando.CONFIRMARSENHA" type="password" class="form-control form-control-lg"
                                placeholder="Confirme sua senha"/>
                        </div>
                    </div>
                </div>
                


                <div class="form-outline mb-4">
                    <div class="row">
                        <div class="col">
                            <label class="form-label" for="cpf">CPF</label>
                            <input v-model="dadosManipulando.CPF" type="number" class="form-control form-control-lg"
                                placeholder="CPF:"/>
                        </div>
                        <div class="col">
                            <label class="form-label" for="telefone">Telefone</label>
                            <input v-model="dadosManipulando.TELEFONE" type="number" class="form-control form-control-lg"
                                placeholder="Telefone:"/>
                        </div>
                    </div>
                </div>
                


                <div class="text-center pt-2">
                    <button type="button" class="btn btn-primary btn-lg me-4 custom-button">Cadastrar-se</button>
                </div>
    
            </form>

            <!-- formPsicologo -->
            <form v-show="varValida == 1">

                <div class="form-outline mb-4">
                    <div class="row">
                            <label class="form-label" for="nome">Nome Completo</label>
                            <input type="text" class="form-control form-control-lg"
                                placeholder="Nome Completo:"/>
                            <label class="form-label" for="crp">CRP</label>
                            <input type="text" class="form-control form-control-lg"
                                placeholder="CRP:"/>
                    </div>
                </div>
                
                <div class="form-outline mb-3">
                    <div class="row">
                        <div class="col">
                            <label class="form-label" for="email">Email</label>
                            <input  type="email" class="form-control form-control-lg"
                                placeholder="Email:"/>
                        </div>
                        <div class="col">
                            <label class="form-label" for="telefone">Telefone</label>
                            <input type="number" class="form-control form-control-lg"
                                placeholder="Telefone:"/>
                        </div>
                    </div>
                </div>
                


                <div class="form-outline mb-4">
                    <div class="row">
                        <div class="col">
                            <label class="form-label" for="senha">Senha</label>
                            <input v-model="dadosManipulando.CPF" type="password" class="form-control form-control-lg"
                                placeholder="Senha:"/>
                        </div>
                        <div class="col">
                            <label class="form-label" for="confirmSenha">Confirme sua senha</label>
                            <input type="password" class="form-control form-control-lg"
                                placeholder="Confirme sua senha:"/>
                        </div>
                    </div>
                </div>

                <div class="form-outline mb-4">
                    <div class="row">
                        <div class="col">
                            <label class="form-label" for="cpf">CPF</label>
                            <input type="number" class="form-control form-control-lg"
                                placeholder="CPF:"/>
                        </div>
                        <div class="col">
                            <label class="form-label" for="nascimento">Data de nascimento</label>
                            <input type="datetime" class="form-control form-control-lg"
                                placeholder="Data de nascimento:"/>
                        </div>
                    </div>
                </div>
                


                <div class="text-center pt-2">
                    <button type="button" class="btn btn-primary btn-lg me-4 custom-button">Solicitar Acesso</button>
                </div>
    
            </form>

        </div>

        <div class="col-md-2"></div>


        <div class="col-md-3 col-lg-3 col-xl-3 text-center">
            <p style="font-size: 45px;">Você é um:</p>
            <div class="d-flex justify-content-center mt-2">
                <button type="button" class="btn btn-primary me-2" @click="buttonPsicologo">
                    <img style="margin-top:15px; " src="/iconPsicologia.png" alt="Ícone Psicólogo" class="icon">
                    <p>Psicologo</p>
                </button>
                <button type="button" class="btn btn-primary" @click="buttonUniversitario">
                    <img style="margin-top:15px;" src="/iconUniversitario.png" alt="Ícone Universitário" class="icon">
                    <p>Universitario</p>
                </button>
            </div>
            
            <img src="/logoSemFundo.svg" class="img-fluid" alt="Logo">
        </div>
        

      </div>
    </div>
  </section>

</template>

<style>
.tituloLoginCad{
    margin-left: 40%; 
    margin-top: 40px;
    margin-bottom: 40px;
    color: #48A3BF;
}
.custom-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #48A3BF;
    color: white;
    text-align: center;
    font-size: 16px;
    border: none;
    border-radius: 20px; 
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); 
}

.custom-button:hover {
    background-color: #3f95af;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); 
}

.custom-button:active {
    background-color: #3f95af;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}

</style>
