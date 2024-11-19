import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import Swal from 'sweetalert2'  
import 'sweetalert2/src/sweetalert2.scss'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import primevue from './plugins/primevue';

const app = createApp(App)
app.use(router);
app.use(createPinia())

primevue(app, 'pt');

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$swal = Swal

app.mount('#app')
