<script>
import FilterButtons from './components/FilterButtons.vue'
import HeaderWidgets from './components/Header/HeaderWidgets.vue'

export default {
  components: {
    FilterButtons, HeaderWidgets
  }
}
</script>

<template>
  <div class="mx-auto lg:max-w-7xl space-y-7">
    <filter-buttons></filter-buttons>

    <header-widgets></header-widgets>
  </div>
</template>

<style></style>