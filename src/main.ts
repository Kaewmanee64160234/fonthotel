import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
createApp(App).use(router).use(pinia).mount('#app')
