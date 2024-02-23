import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createPinia } from 'pinia'

import { initFlowbite } from 'flowbite'

const pinia = createPinia()
onMounted(() => {
    initFlowbite();
})
createApp(App).use(router).use(createPinia()).mount('#app')
