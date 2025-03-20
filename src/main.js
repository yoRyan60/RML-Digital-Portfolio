import './assets/main.css'
import './assets/customfonts.css'
import router from './router'


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')    


/*const currentYear = new Date().getFullYear()
const yearElement = document.querySelector('.year')
yearElement.textContent = currentYear*/