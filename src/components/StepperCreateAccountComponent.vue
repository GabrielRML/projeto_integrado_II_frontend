<template lang="">
    <div style="padding: 2%; width: 100%; max-width: 700px;">
        <div class="row">
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <InputText id="firstName" v-model="this.form.nome" :style="{ width: '100%' }" />
                    <label for="firstName">Nome</label>
                </FloatLabel>
            </div>
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <InputText id="lastName" v-model="this.form.sobrenome" :style="{ width: '100%' }" />
                    <label for="lastName">Sobrenome</label>
                </FloatLabel>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <InputMask id="cpf" v-model="this.form.cpf" mask="999.999.999-99" :style="{ width: '100%' }" />
                    <label for="cpf">CPF</label>
                </FloatLabel>
            </div>
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <InputText id="email" v-model="this.form.email" :style="{ width: '100%' }" />
                    <label for="email">Email</label>
                </FloatLabel>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <Calendar
                        inputId="data_nascimento"
                        :style="{ width: '100%' }"
                        :dateFormat="'dd/mm/yy'"
                        v-model="this.form.dataNascimento"
                    />
                    <label for="data_nascimento">Data de Nascimento</label>
                </FloatLabel>
            </div>
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <Dropdown v-model="this.form.genero" :options="generoOptions" optionLabel="label" optionValue="value" :style="{ width: '100%' }" />
                    <label for="genero">Selecione um Gênero</label>
                </FloatLabel>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <Password id="password" v-model="this.form.password" toggleMask :feedback="false" :style="{ width: '100%' }" />
                    <label for="password">Senha</label>
                </FloatLabel>
            </div>
            <div class="col-md-6 col-12" style="margin-top: 2rem;">
                <FloatLabel>
                    <Password id="confirmarSenha" v-model="this.form.confirmPassword" toggleMask :feedback="false" :style="{ width: '100%' }" />
                    <label for="confirmarSenha">Confirme sua Senha</label>
                </FloatLabel>
            </div>
        </div>

        <div class="text-center pt-2" style="margin-top: 2%;">
            <button type="button" @click="cadastro" class="btn custom-button-secundary">Cadastrar-se</button>
        </div>
    </div>
</template>

<script>
import { Genero } from '@/enums/genero';

export default {
    data() {
        return {
            generoOptions: Object.values(Genero),
            form: {
                nome: null,
                sobrenome: null,
                email: null,
                cpf: null,
                dataNascimento: null,
                genero: null,
                password: null,
                confirmPassword: null,
                tipoUsuario: 'PACIENTE'
            },      
        }
    },
    methods: {
        cadastro(){
            if(this.form.nome == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o campo do primeiro nome",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.sobrenome == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o campo sobrenome",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.cpf == null){
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
                title: "Preencha o campo email",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.dataNascimento == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o campo da data de nascimento",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.genero == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o selecione um gênero",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.password == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o campo senha",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else if(this.form.confirmPassword == null){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Preencha o campo para confimar sua senha",
                showConfirmButton: false,
                timer: 1500
            });
            }else if(this.form.password != this.form.confirmPassword){
                Swal.fire({
                position: "top",
                icon: "error",
                title: "Senhas não são iguais!!!",
                showConfirmButton: false,
                timer: 1500
            });
            }
            else {
                const form = this.form;
                form.dataNascimento = new Date(this.form.dataNascimento).toISOString();
                axios.post('http://localhost:8080/api/usuario/register', this.form)
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
            }
        }
    },
}
</script>

<style lang="">
    
</style>