import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
