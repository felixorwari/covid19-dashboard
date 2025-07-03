<script>
import LogoWidget from './LogoWidget.vue'
import StatsWidget from './StatsWidget.vue'

export default {
  components: {
    LogoWidget,
    StatsWidget
  }
}
</script>

<template>
  <header
    class="grid grid-cols-1 justify-center items-center bg-white rounded-lg divide-y divide-gray-200 shadow lg:justify-start lg:divide-y-0 lg:divide-x dark:divide-gray-600 dark:bg-gray-700 lg:grid-cols-4"
  >
    <logo-widget class="lg:col-span-1"></logo-widget>
    <stats-widget class="lg:col-span-3"></stats-widget>
  </header>
</template>
