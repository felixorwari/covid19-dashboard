import './assets/main.css'

import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import HighchartsVue from 'highcharts-vue'
import 'highcharts/modules/accessibility.js'
import 'highcharts/modules/map.js'
import 'highcharts/themes/adaptive.js'

import App from './App.vue'

const app = createApp(App)

app.use(HighchartsVue)
app.use(VueApexCharts)
app.mount('#app')
