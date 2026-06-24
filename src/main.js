import './assets/main.css'
import './assets/customfonts.css'
import router from './router'
import VueSplide from '@splidejs/vue-splide';


import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(router)
.use( VueSplide )
.mount('#app')    


/*const currentYear = new Date().getFullYear()
const yearElement = document.querySelector('.year')
yearElement.textContent = currentYear*/