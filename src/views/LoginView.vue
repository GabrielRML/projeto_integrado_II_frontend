<template>
    <div class="d-flex h-100">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-6 col-xl-4 col-12 login-left">
            <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                <img src="../../public/image/logo-3.png" class="img-fluid larger-image" alt="Logo">
                <h1 id="logo">Clinical Link</h1>
            </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-8 col-12 d-flex flex-column justify-content-center align-items-center login-right">
            <div class="col-md-8 col-lg-6 col-xl-4">
                <h1 class="titleLogin text-center mb-4">Login</h1>
                <form @submit.prevent="login" class="d-flex flex-column justify-content-center align-items-center w-100">
                    <div class="mb-3 w-100">
                        <FloatLabel>
                            <InputText id="email" v-model="user.username" :style="{ width: '100%' }" />
                            <label for="email">Usuário</label>
                        </FloatLabel>
                    </div>

                    <div class="mb-4 w-100">
                        <FloatLabel>
                            <Password id="senha" v-model="user.password" toggleMask :feedback="false" :style="{ width: '100%' }" />
                            <label for="senha">Senha</label>
                        </FloatLabel>
                    </div>

                    <div class="d-flex justify-content-center text-center gap-3 w-100">
                        <button type="button" @click="login" class="btn custom-button-primary w-100">Entrar</button>
                        <button type="button" class="btn custom-button-secundary" onclick="window.location.href='/cadastro'">Cadastrar</button>
                    </div>    
                </form>

                <div class="text-center mt-3">
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';

import http from '@/services/http.js';
import { useAuthStore } from '../stores/auth.js';

export default {
  components: { InputText, FloatLabel, Password },
  data: function () {
    return {
        user: {
            username: '',
            password: ''
        },
        auth: useAuthStore()
    }
  },
  computed: {
  },
  methods: {
    async login(){
        try {
            const { data } = await http.post('/authenticate', this.user);
            this.auth.setToken(data.id_token);
            const user = await http.get('/account', { headers: { Authorization: `Bearer ${this.auth.token}` } });
            this.auth.setUser(user.data);
        } catch (error) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: error.response.data.detail,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
  },
  mounted: function () {}
}

</script>

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

.titleLogin {
    color: #48A3BF;
}

.titleLogin > h1 {
    font-size: 2.5em;
    font-weight: bold;
}

.login-left {
    background-color: rgba(72, 163, 191, 0.57);
    height: 100vh; 
    position: sticky; top: 0;
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
