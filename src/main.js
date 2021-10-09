import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// the vue CLI sets webpack in someway that you 
//can import styles direcly in js, and it will work.
import './assets/styles/style.scss'

// createApp(App).use(router).mount('#app')


const app = createApp(App)
app.use(router)
app.mount('#app')
