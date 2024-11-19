<template>
  <div class="card flex justify-center">
    <Stepper>
      <StepperPanel header="Conta">
        <template #content="{ nextCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
            >
              <div class="row">
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputText
                      id="firstName"
                      v-model="account.nome"
                      :style="{ width: '100%' }"
                    />
                    <label for="firstName">Nome</label>
                  </FloatLabel>
                </div>
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputText
                      id="lastName"
                      v-model="account.sobrenome"
                      :style="{ width: '100%' }"
                    />
                    <label for="lastName">Sobrenome</label>
                  </FloatLabel>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputMask
                      id="cpf"
                      v-model="account.cpf"
                      mask="999.999.999-99"
                      :style="{ width: '100%' }"
                    />
                    <label for="cpf">CPF</label>
                  </FloatLabel>
                </div>
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputText
                      id="email"
                      v-model="account.email"
                      :style="{ width: '100%' }"
                    />
                    <label for="email">Email</label>
                  </FloatLabel>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <Calendar
                      inputId="data_nascimento"
                      :style="{ width: '100%' }"
                      :dateFormat="'dd/mm/yy'"
                      v-model="account.dataNascimento"
                    />
                    <label for="data_nascimento">Data de Nascimento</label>
                  </FloatLabel>
                </div>
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <Dropdown
                      v-model="account.genero"
                      :options="generoOptions"
                      optionLabel="label"
                      optionValue="value"
                      :style="{ width: '100%' }"
                    />
                    <label for="genero">Selecione um Gênero</label>
                  </FloatLabel>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <Password
                      id="password"
                      v-model="account.password"
                      toggleMask
                      :feedback="false"
                      :style="{ width: '100%' }"
                    />
                    <label for="password">Senha</label>
                  </FloatLabel>
                </div>
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <Password
                      id="confirmarSenha"
                      v-model="account.confirmPassword"
                      toggleMask
                      :feedback="false"
                      :style="{ width: '100%' }"
                    />
                    <label for="confirmarSenha">Confirme sua Senha</label>
                  </FloatLabel>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end gap-2 pt-4">
            <Button
              label="Proximo"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="nextCallback"
            />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Detalhes">
        <template #content="{ prevCallback }">
          <div class="flex flex-column h-12rem">
            <div
              class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"
            >
              <div class="row">
                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputText
                      id="registroProfissional"
                      v-model="
                        account.detalhesProfissionais.registroProfissional
                      "
                      :style="{ width: '100%' }"
                    />
                    <label for="registroProfissional"
                      >Registro profissonal</label
                    >
                  </FloatLabel>
                </div>

                <div class="col-md-6 col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <InputMask
                      id="telefone"
                      :style="{ width: '100%' }"
                      mask="(99) 99999-9999"
                      placeholder="(99) 99999-9999"
                      v-model="account.detalhesProfissionais.telefone"
                    />
                    <label for="telefone">Telefone</label>
                  </FloatLabel>
                </div>
              </div>

              <div class="row">
                <div class="col-12" style="margin-top: 2rem">
                  <FloatLabel>
                    <Textarea
                      id="descricao"
                      :style="{ width: '100%' }"
                      rows="5"
                      cols="30"
                      v-model="account.detalhesProfissionais.descricao"
                    />
                    <label for="descricao">Descrição</label>
                  </FloatLabel>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end gap-2 pt-4">
            <Button
              label="Voltar"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="prevCallback"
            />
            <Button
              label="Cadastrar"
              icon="pi pi-check"
              iconPos="right"
              @click="cadastro()"
            />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<script>
import { Genero } from '@/enums/genero';
import axios from 'axios';

export default {
  props: {
    tipoUsuario: {
      required: true
    }
  },
  data() {
    return {
      active: 0,
      generoOptions: Object.values(Genero),
      account: {
        nome: null,
        sobrenome: null,
        email: null,
        cpf: null,
        dataNascimento: null,
        genero: null,
        password: null,
        confirmPassword: null,
        tipoUsuario: null,
        detalhesProfissionais: {
          registroProfissional: null,
          telefone: null,
          descricao: null,
          localTrabalho: null,
          localTrabalhoLat: null,
          localTrabalhoLong: null,
        },
      },
    };
  },
  methods: {
    cadastro() {
      const validationErrors = {
        nome: "Preencha o campo do primeiro nome",
        sobrenome: "Preencha o campo sobrenome",
        cpf: "Preencha o campo CPF",
        email: "Preencha o campo email",
        dataNascimento: "Preencha o campo da data de nascimento",
        genero: "Selecione um gênero",
        password: "Preencha o campo senha",
        confirmPassword: "Preencha o campo para confirmar sua senha",
      };

      for (const field in validationErrors) {
        if (!this.account[field]) {
          Swal.fire({
            position: "top",
            icon: "error",
            title: validationErrors[field],
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
      }

      if (this.account.password !== this.account.confirmPassword) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "As senhas não são iguais!",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      if (!this.account.detalhesProfissionais.registroProfissional) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Campo de registro profissional obrigatório",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      const form = this.account;
      form.dataNascimento = new Date(this.account.dataNascimento).toISOString();
      form.tipoUsuario = this.tipoUsuario;

      console.log(form);

      axios.post('http://localhost:8080/api/usuario/register', this.account)
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

    },
  },
};
</script>
