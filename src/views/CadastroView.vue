<template>
    <div class="d-flex h-100">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-6 col-xl-4 col-0 login-left">
            <div class="col-md-8 col-lg-8 col-xl-8">
                <img src="../../public/image/logo-3.png"
                class="img-fluid larger-image" alt="Logo">
            </div>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center h-100 col-md-6 col-lg-6 col-xl-8 col-12">
            <div class="title">
                <h1>Cadastro</h1>
            </div>
                
            <div style="padding: 2%;">

                <div class="row">
                    <div class="col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <InputText id="nome" v-model="this.form.login" :style="{ width: '100%' }" />
                            <label for="nome">Nome de usuário</label>
                        </FloatLabel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <InputText id="nome" v-model="this.form.firstName" :style="{ width: '100%' }" />
                            <label for="nome">Nome</label>
                        </FloatLabel>
                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <InputText id="nome" v-model="this.form.lastName" :style="{ width: '100%' }" />
                            <label for="nome">Sobrenome</label>
                        </FloatLabel>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <InputMask id="cpf" v-model="this.form.CPF" mask="999.999.999-99" :style="{ width: '100%' }" />
                            <label for="cpf">CPF</label>
                        </FloatLabel>
                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <InputText id="email" v-model="this.form.email" />
                            <label for="email">Email</label>
                        </FloatLabel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <Calendar v-model="this.form.DATA_NASCIMENTO" inputId="data_nascimento" :style="{ width: '100%' }" />
                            <label for="data_nascimento">Data de Nascimento</label>
                        </FloatLabel>
                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel class="w-full md:w-14rem">
                            <Dropdown class="w-full md:w-14rem"  v-model="this.form.GENERO" inputId="genero" :options="generos" optionLabel="genero" :style="{ width: '100%' }" />
                            <label for="genero">Selecione um Gênero</label>
                        </FloatLabel>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <Password id="password" v-model="this.form.password" toggleMask :feedback="false" :style="{ width: '100%' }" />
                            <label for="password">Senha</label>
                        </FloatLabel>
                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-6 col-12" style="margin-top: 2rem;">
                        <FloatLabel>
                            <Password id="confirmarSenha" v-model="this.form.CONFIRMAR_SENHA" toggleMask :feedback="false" :style="{ width: '100%' }" />
                            <label for="confirmarSenha">Confirme sua Senha</label>
                        </FloatLabel>
                    </div>
                </div>

                <div  v-if="form.TIPO_USUARIO === 1" class="col-12" style="margin-top: 2rem;">
                    <FloatLabel>
                        <InputMask id="crp" v-model="this.form.CRP" mask="99/999.999" :style="{ width: '100%' }" />
                        <label for="crp">CRP</label>
                    </FloatLabel>
                </div>

                <div v-if="form.TIPO_USUARIO === 2" class="col-12" style="margin-top: 2rem;">
                    <FloatLabel>
                        <InputNumber v-model="form.RA" inputId="ra" :useGrouping="false" :style="{ width: '100%' }" />
                        <label for="ra">RA</label>
                    </FloatLabel>
                </div>

                <div class="d-flex flex-column justify-content-center align-items-center col-md-12 col-lg-12 col-xl-12 col-12" style="margin-top: 2rem;">
                    <SelectButton
                        v-model="this.form.TIPO_USUARIO"
                        :options="this.TIPOS_USUARIO"
                        optionLabel="label"
                        optionValue="value"
                        aria-labelledby="basic"
                        :class="{ 'p-invalid': this.form.TIPO_USUARIO == null }"
                    />

                    <span v-if="this.form.TIPO_USUARIO == null" class="error-message" >Por favor, selecione o tipo de sua conta</span>

                    <div class="d-flex align-items-center justify-content-center gap-3" style="margin-top: 2rem;">
                        <Checkbox v-model="termos" inputId="termos" name="termos" value="true" />
                        <label for="termos" class="ml-2"> Aceitar politica e termos do site. </label>
                    </div>
                </div>
                
                <div class="text-center pt-2" style="margin-top: 2%;">
                    <button type="button" @click="cadastro" class="btn custom-button-secundary">Cadastrar-se</button>
                </div>
            </div>

            <div class="d-flex align-items-center gap-3">
                <a href="#"><img src="../../public/icones/facebook.svg" class="icon" alt="Facebook"></a>
                <a href="#"><img src="../../public/icones/instagram.svg" class="icon" alt="Instagram"></a>
            </div>
        </div>
    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import InputMask from 'primevue/inputmask';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import SelectButton from 'primevue/selectbutton';
import Checkbox from 'primevue/checkbox';
import InputNumber from 'primevue/inputnumber';
import axios from 'axios';

export default {
  components: {
    RouterLink, RouterView, InputText, FloatLabel, InputMask, Calendar, Dropdown, Password, SelectButton, Checkbox, InputNumber
  },
  data: function () {
    return {
        varValida: 0,
        form: {
            id: null,
            login: null,
            firstName: null,
            lastName: null,
            email: null,
            CPF: null,
            DATA_NASCIMENTO: null,
            GENERO: null,
            SENHA: null,
            CONFIRMAR_SENHA: null,
            CRP: null,
            TIPO_USUARIO: 0,
            langKey: 'pt-br',
            activated: 1
        },
        generos: [
            { genero: 'Masculino' },
            { genero: 'Feminino' },
            { genero: 'Outro' }
        ],
        TIPOS_USUARIO: [
            { label: 'Usuário', value: 0 },
            { label: 'Psicologo', value: 1 },
            { label: 'Universitario', value: 2 }
        ],
        termos: false
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
    },

    cadastro(){
        
        if(this.form.firstName == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo NOME",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.lastName == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo SOBRENOME",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.CPF == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo CPF",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.email == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo EMAIL",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.DATA_NASCIMENTO == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo DATA DE NASCIMENTO",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.GENERO == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo GENERO",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.password == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo SENHA",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else if(this.form.CONFIRMAR_SENHA == null){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Preencha o campo CONFIRMAR SENHA",
            showConfirmButton: false,
            timer: 1500
        });
        }else if(this.form.password != this.form.CONFIRMAR_SENHA){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Senhas não são iguais!!!",
            showConfirmButton: false,
            timer: 1500
        });
        }else if(this.termos == false){
            Swal.fire({
            position: "top",
            icon: "error",
            title: "Aceite os termos e politicas do site!!!",
            showConfirmButton: false,
            timer: 1500
        });
        }
        else{
            console.log(this.form)
            let user = {
                activated: true,
                email: this.form.email,
                firstName: this.form.firstName,
                id: null,
                langKey: "pt-br",
                lastName: this.form.lastName,
                login: this.form.login,
                password: this.form.password
            };
            console.log(user)
            // Realiza a requisição POST utilizando Axios
            axios.post('http://localhost:8080/api/register', user)
            .then(response => {

                let id = response.data.id;
                let login = response.data.login;
                let birthDateUTC = new Date(this.form.DATA_NASCIMENTO).toISOString();

                if(this.form.TIPO_USUARIO == 0){
                    let pessoa = {
                        id: null,
                        cpf: this.form.cpf, 
                        birthDate: birthDateUTC, 
                        internalUser: { 
                            id: id,
                            login: login
                        }
                    };
                    setTimeout(() => {
                        axios.post('http://localhost:8080/api/usuarios', pessoa)
                        .then(response => {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Sua conta foi criada com sucesso",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setTimeout(() => {
                                window.location.href = "/login";
                            }, 1500);
                        })
                    .catch(error => {
                        Swal.fire({
                            position: "top",
                            icon: "error",
                            title: "Erro ao criar sua conta!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    }, 1500);
                }else{
                    let birthDateUTC = new Date(this.form.DATA_NASCIMENTO).toISOString();
                    let pessoa = {
                        id: null,
                        cpf: this.form.cpf, 
                        birthDate: birthDateUTC,
                        description: 'teste',
                        price: 25,
                        timeSession: 1,
                        identification: 'teste',
                        specialistType: 'PSICOLOGO',
                        internalUser: { 
                            id: id,
                            login: login
                        }
                    };
                    setTimeout(() => {
                    axios.post('http://localhost:8080/api/especialistas', pessoa)
                    .then(response => {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Sua conta foi criada com sucesso",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            window.location.href = "/login";
                        }, 1500);
                    })
                    .catch(error => {
                        console.log(error)
                        Swal.fire({
                            position: "top",
                            icon: "error",
                            title: "Erro ao criar sua conta!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    }, 1500);
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Erro ao criar sua conta!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });


        }
    }

  },
  mounted: function () {
  },

  watch: {
    'form.TIPO_USUARIO': function(args){
        console.log(args)
    }
  }
}
</script>

<style>
main {
    background-color: #f5f5f5;
    height: 100vh;
}

.error-message {
    padding: 5px;
    color: red;
    font-size: 12px;
}

/* Removendo o bug do Dropdown padding-left: 2rem */
.p-dropdown-items {
    padding: 0.25rem;
}

/* Removendo bug do input do password não ficar com width 100% */
.p-inputtext {
    width: 100%;
}

</style>
