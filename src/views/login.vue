<script>
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';

export default {
  components: { InputText, FloatLabel },
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
  mounted: function () {}
}

</script>

<template>
    <div class="d-flex h-100">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-6 col-xl-4 col-0 login-left">
            <div class="col-md-8 col-lg-8 col-xl-8">
                <img src="/logoSemFundo.svg"
                class="img-fluid larger-image" alt="Logo">
            </div>
        </div> 
        <div class="col-md-6 col-lg-6 col-xl-8 col-12 d-flex flex-column justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-between">
                <div class="title">
                    <h1>Login</h1>
                </div>
            
                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                    <div class="d-flex flex-column justify-content-between align-items-center">
                        <div class="col-md-8 col-lg-8 col-xl-4 col-8" style="margin-top: 2%;">
                            <FloatLabel>
                                <InputText id="email" v-model="this.dados.email" :style="{ width: '100%' }" />
                                <label for="email">Email</label>
                            </FloatLabel>
                        </div>
                
                        <div class="col-md-8 col-lg-8 col-xl-4 col-8" style="margin-top: 3%;">
                            <FloatLabel>
                                <InputText id="senha" v-model="this.dados.senha" :style="{ width: '100%' }" />
                                <label for="senha">Senha</label>
                            </FloatLabel>
                        </div>
                    </div>
            
                    <div class="d-flex justify-content-center text-center pt-2" style="margin-top: 2%; gap: 2%;">
                        <button type="button" @click="login" class="btn custom-button-primary">Entrar</button>
                        <button type="button" class="btn custom-button-secundary" onclick="window.location.href='/cadastroUser'">Cadastrar</button>
                    </div>
                
                    <div class="text-center mt-2">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

main {
    height: 100vh;
}

footer {
    display: none;
}

.larger-image {
    width: 100%; 
    height: 100%;
    object-fit: cover;
}

.title {
    margin-top: 4%;
    text-align: center;
    color: #48A3BF;
}

.title > h1 {
    font-size: 2.5em;
    font-weight: bold;
}

.login-left {
    background-color: rgba(72, 163, 191, 0.57);
}

.icon {
    width: 32px; 
    height: 32px; 
}

.forgot-password {
    text-align: center; 
    margin-top: 20px
}

</style>
