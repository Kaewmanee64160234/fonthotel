import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createPinia } from 'pinia'
//in your `main.js` file
import '@vuepic/vue-datepicker/dist/main.css'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
createApp(App).use(router).use(createPinia()).mount('#app')
