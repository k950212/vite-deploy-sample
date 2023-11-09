import './assets/main.css'

import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)

app.use(router)

app.use(VueAxios, axios)
app.mount('#app')
