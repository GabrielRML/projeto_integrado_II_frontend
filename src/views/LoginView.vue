<template>
    <div class="d-flex h-100">
        
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-6 col-xl-4 col-0 login-left">
            <div class="col-md-8 col-lg-8 col-xl-8">
                <img src="../../public/image/logo-3.png"
                class="img-fluid larger-image" alt="Logo">
            </div>
        </div> 
        <div class="col-md-6 col-lg-6 col-xl-8 col-12 d-flex flex-column justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-between">
                <div class="title">
                    <h1>Login</h1>
                </div>
            
                <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                    <form @submit.prevent="login" class="d-flex flex-column justify-content-between align-items-center">
                        <div class="col-md-8 col-lg-8 col-xl-4 col-8">
                            <div class="d-flex flex-column gap-2">
                                <label for="email">Email</label>
                                <InputText id="email" v-model="user.email" />
                            </div>
                        </div>
                
                        <div class="col-md-8 col-lg-8 col-xl-4 col-8" style="margin-top: 1rem;">
                            <div class="d-flex flex-column gap-2">
                                <label for="password">Senha</label>
                                <Password id="password" v-model="user.password" toggleMask :feedback="false" :style="{ width: '100%' }" />
                            </div>
                        </div>
                    </form>
            
                    <div class="d-flex justify-content-center text-center pt-2" style="margin-top: 2%; gap: 2%;">
                        <button type="button" @click="login" class="btn custom-button-primary">Entrar</button>
                        <button type="button" class="btn custom-button-secundary" onclick="window.location.href='/cadastro'">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useAuthStore } from '../stores/auth.js';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
    };
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    return { router, authStore };
  },
  methods: {
    async login() {
      try {
        await this.authStore.login(this.user);
        this.router.push({ name: 'Pagina Inicial' });
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Erro ao realizar login',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  },
};
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
