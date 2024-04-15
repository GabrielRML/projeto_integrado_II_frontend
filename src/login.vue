<script>
import { ref } from 'vue';
import router from '@/router';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'



export default {
  components: {

  },
  data: function () {
    return {
        dados:{
            email: null,
            senha: null
        }
    }
  },
  computed: {
  },
  methods: {
    login(){
        if(this.dados.email == null){
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Insira seu email!",
                showConfirmButton: false,
                timer: 1500
            });
        }else if(this.dados.senha == null){
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Insira sua senha!",
                showConfirmButton: false,
                timer: 1500
            });
        }
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

        <div class="tituloLogin">
            <h1 style="font-size: 50px;">ClinicalLink</h1>
        </div>

        <div class="col-md-5 col-lg-5 col-xl-5 offset-xl-1">

            <form>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Email:</label>
                    <input v-model="dados.email" type="email" class="form-control form-control-lg"
                        placeholder="Email"/>
                </div>
    
                <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example4">Senha:</label>
                    <input v-model="dados.senha" type="password" class="form-control form-control-lg"
                        placeholder="Senha" />
                </div>
                
                <div>
                    <div class="text-center pt-2">
                        <button type="button" @click="login" class="btn btn-primary btn-lg me-4 custom-button">Entrar</button>
                        <button type="button" class="btn btn-primary btn-lg custom-button2" onclick="window.location.href='/cadastroUser'">Cadastrar</button>
                    </div>
                
                
                    <div class="text-center mt-2">
                        <a href="#" class="text-body">Esqueceu a senha?</a>
                    </div>
                    
                    <div class="icon-links text-center">
                        <a href="#"><img src="/icones/instagram.svg" class="icon" alt="Instagram"></a>
                        <a href="#"><img src="/icones/facebook.svg" class="icon" alt="Facebook"></a>
                        <a href="#"><img src="/icones/whats.svg" class="icon" alt="WhatsApp"></a>
                    </div>
                </div>
                
                
            </form>

        </div>

        <div class="col-md-2"></div>

        <div class="col-md-3 col-lg-3 col-xl-3">
            <img src="/logoSemFundo.svg"
              class="img-fluid larger-image" alt="Logo">
        </div>

      </div>
    </div>
  </section>

</template>

<style>
.larger-image {
    width: 100%; 
    height: 30%; 
}
.tituloLogin{
    margin-left: 40%; 
    margin-top: -85px;
    margin-bottom: 40px;
    color: #48A3BF;
}

.icon-links {
    display: flex;
    justify-content: center; 
    align-items: center; 
    gap: 10px; 
    margin-top: 100px;
}

.icon {
    width: 32px; 
    height: 32px; 
}

.forgot-password {
    text-align: center; 
    margin-top: 20px
}

.custom-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffffff;
    color: #48A3BF;
    text-align: center;
    font-size: 16px;
    border: none;
    border-radius: 20px; 
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); 
}

.custom-button:hover {
    background-color: #48A3BF;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); 
}

.custom-button:active {
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}

.custom-button2 {
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

.custom-button2:hover {
    background-color: #3f95af;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3); 
}

.custom-button2:active {
    background-color: #3f95af;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
}


</style>
