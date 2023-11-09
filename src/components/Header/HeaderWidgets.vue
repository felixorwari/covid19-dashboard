<script>
import LogoWidget from './LogoWidget.vue'
import StatsWidget from './StatsWidget.vue'

export default {
    components: {
        LogoWidget, StatsWidget
    }
}
</script>

<template>
    <header class="grid items-center bg-white divide-x rounded-lg shadow lg:grid-cols-4">
        <logo-widget class="col-span-1"></logo-widget>
        <stats-widget class="col-span-3"></stats-widget>
    </header>
</template>