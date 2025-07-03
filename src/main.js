import './assets/main.css'

import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import HighchartsVue from 'highcharts-vue'
import HighchartsMapModule from 'highcharts/modules/map.js'
import HighchartsAccessibility from 'highcharts/modules/accessibility.js'
import Highcharts from 'highcharts'

import App from './App.vue'

const app = createApp(App)

HighchartsAccessibility(Highcharts)
HighchartsMapModule(Highcharts)

app.use(HighchartsVue)
app.use(VueApexCharts)
app.mount('#app')
