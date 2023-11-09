<script>
import FilterButtons from './components/FilterButtons.vue'
import HeaderWidgets from './components/Header/HeaderWidgets.vue'
import RegisteredLabs from './components/Cards/RegisteredLabs.vue';
import PositiveCases from './components/Cards/PositiveCases.vue';
import NegativeCases from './components/Cards/NegativeCases.vue';

export default {
  components: {
    FilterButtons, HeaderWidgets, RegisteredLabs, PositiveCases, NegativeCases
  }
}
</script>

<template>
  <div class="mx-auto lg:max-w-7xl space-y-7">
    <filter-buttons></filter-buttons>

    <header-widgets></header-widgets>

    <div class="grid lg:grid-cols-3 gap-7">
      <registered-labs></registered-labs>
      <positive-cases></positive-cases>
      <negative-cases></negative-cases>

      <div class="col-span-2">
        
      </div>
      <div class="col-span-1">
        
      </div>
      <div class="col-span-1">
        
      </div>
      <div class="col-span-2">
        
      </div>
    </div>
  </div>
</template>

<style></style>