import 'quasar/src/css/index.sass'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar)
app.use(router)
app.mount('#app')
