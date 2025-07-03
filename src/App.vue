<script>
import FilterButtons from './components/FilterButtons.vue'
import HeaderWidgets from './components/Header/HeaderWidgets.vue'
import RegisteredLabs from './components/Cards/RegisteredLabs.vue'
import PositiveCases from './components/Cards/PositiveCases.vue'
import NegativeCases from './components/Cards/NegativeCases.vue'
import StatesLeaderboard from './components/Tables/StatesLeaderboard.vue'
import LabLeaderboard from './components/Tables/LabLeaderboard.vue'
import MonthlyCases from './components/Charts/MonthlyCases.vue'
import KenyaCounties from './components/Maps/KenyaCounties.vue'

export default {
  components: {
    FilterButtons,
    HeaderWidgets,
    RegisteredLabs,
    PositiveCases,
    NegativeCases,
    StatesLeaderboard,
    LabLeaderboard,
    MonthlyCases,
    KenyaCounties
  }
}
</script>

<template>
  <div class="mx-auto space-y-7 max-w-7xl">
    <filter-buttons></filter-buttons>

    <header-widgets></header-widgets>

    <div class="grid gap-7 lg:grid-cols-3">
      <registered-labs></registered-labs>
      <positive-cases></positive-cases>
      <negative-cases></negative-cases>
    </div>

    <div class="grid grid-cols-1 gap-7 lg:grid-cols-3">
      <div class="flex lg:col-span-2">
        <kenya-counties></kenya-counties>
      </div>

      <div class="lg:col-span-1">
        <states-leaderboard></states-leaderboard>
      </div>

      <div class="lg:col-span-1">
        <lab-leaderboard></lab-leaderboard>
      </div>

      <div class="lg:col-span-2">
        <monthly-cases class="mx-auto"></monthly-cases>
      </div>
    </div>
  </div>
</template>
