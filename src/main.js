import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Swal from 'sweetalert2'  
import 'sweetalert2/src/sweetalert2.scss'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import PrimeVue
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css'


const app = createApp(App)
app.use(PrimeVue);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$swal = Swal

app.mount('#app')
