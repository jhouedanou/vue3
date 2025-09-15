import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })


const app = createApp(App)
app.use(router)
app.mount('#app')
