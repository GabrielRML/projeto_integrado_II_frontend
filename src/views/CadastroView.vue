<template>
    <div class="d-flex h-150" style="height: 100vh; overflow-y: auto;">
        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-6 col-xl-4 col-12 login-left">
            <div class="col-md-8 col-lg-8 col-xl-8 text-center">
                <img src="../../public/image/logo-3.png" class="img-fluid larger-image" alt="Logo">
            </div>
        </div>
    
        <div class="d-flex flex-column justify-content-center align-items-center h-100 col-md-6 col-lg-6 col-xl-8 col-12">
            <div class="titleLogin" style="margin-top: 160px;">
                <h1>Cadastro</h1>
            </div>
    
            <div style="padding: 2%; width: 100%; max-width: 700px;">
                <div class="d-flex flex-column" style="margin-top: 2rem;">
                    <label for="tipoUsuario">Deseja se cadastrar como:</label>
                    <SelectButton
                        id="tipoUsuario"
                        class="d-flex justify-content-center align-items-center w-100"
                        aria-labelledby="basic"
                        :options="tipoUsuarioOptions"
                        optionLabel="label"
                        optionValue="value"
                        v-model="this.tipoUsuarioSelected"
                    />
                    <span v-if="this.tipoUsuarioSelected == null" class="error-message">Por favor, selecione o tipo de sua conta</span>
                </div>

                <div v-if="tipoUsuarioSelected === 'PACIENTE'">
                    <StepperCreateAccountComponent/>
                </div>

                <div v-else>
                    <StepperCreateProfessionalAccountComponent
                        :tipo-usuario="tipoUsuarioSelected"
                    />
                </div>

                <div class="d-flex align-items-center justify-content-center gap-3" style="margin-top: 2rem;">
                    <Checkbox v-model="termos" inputId="termos" name="termos" value="true" />
                    <label for="termos">Aceitar política e termos do site.</label>
                </div>
    
                <div class="d-flex justify-content-center align-items-center gap-3 mt-3">
                    <a href="#"><img src="../../public/icones/facebook.svg" class="icon" alt="Facebook"></a>
                    <a href="#"><img src="../../public/icones/instagram.svg" class="icon" alt="Instagram"></a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { TipoUsuario } from '@/enums/tipo-usuario';
import StepperCreateProfessionalAccountComponent from '@/components/StepperCreateProfessionalAccountComponent.vue';
import StepperCreateAccountComponent from '@/components/StepperCreateAccountComponent.vue';

export default {
  components: {
    RouterLink, RouterView, TipoUsuario, StepperCreateProfessionalAccountComponent, StepperCreateAccountComponent
  },
  data: function () {
    return {
        tipoUsuarioOptions: Object.values(TipoUsuario),
        tipoUsuarioSelected: 'PACIENTE',
        termos: false
    }
  },
  computed: {
  },
  methods: {
    
  },
  mounted: function () {
  },

  watch: {}
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

</style>
