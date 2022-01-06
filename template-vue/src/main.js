import {createApp} from 'vue'
import App from './App.vue'
import '@/style/index.css'
import { initPlugin } from '@/plugin'

const app = createApp(App)
initPlugin(app)
app.mount('#app')
