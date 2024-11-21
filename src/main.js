import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import Swal from 'sweetalert2';  
import 'sweetalert2/src/sweetalert2.scss';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Ícone do Instagram
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícone sólido
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// Adicione os ícones que deseja usar à biblioteca
library.add(faInstagram, faUser);

import primevue from './plugins/primevue';

const app = createApp(App);
app.use(router);
app.use(createPinia());

primevue(app, 'pt');

// Registre o componente FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.config.globalProperties.$swal = Swal;

app.mount('#app');
