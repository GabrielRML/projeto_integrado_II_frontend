import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Swal from 'sweetalert2'  
import 'sweetalert2/src/sweetalert2.scss'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.config.globalProperties.$swal = Swal

app.mount('#app')
