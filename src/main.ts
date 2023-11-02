import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ViewUIPlus from 'view-ui-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import '../theme/index.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ViewUIPlus)
app.use(ElementPlus)

app.mount('#app')
