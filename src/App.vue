<script>
import FilterButtons from './components/FilterButtons.vue'
import HeaderWidgets from './components/Header/HeaderWidgets.vue'
import RegisteredLabs from './components/Cards/RegisteredLabs.vue'
import PositiveCases from './components/Cards/PositiveCases.vue'
import NegativeCases from './components/Cards/NegativeCases.vue'
import StatesLeaderboard from './components/Tables/StatesLeaderboard.vue'
import LabLeaderboard from './components/Tables/LabLeaderboard.vue'
import MonthlyCases from './components/Charts/MonthlyCases.vue'

export default {
  components: {
    FilterButtons,
    HeaderWidgets,
    RegisteredLabs,
    PositiveCases,
    NegativeCases,
    StatesLeaderboard,
    LabLeaderboard,
    MonthlyCases
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

      <div class="flex col-span-2">
        <div class="w-full min-h-full bg-white rounded-lg shadow">
          <div class="px-6 py-5 border-b">
            <h4 class="font-semibold">Covid-19 Positive Cases by County</h4>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <states-leaderboard></states-leaderboard>
      </div>

      <div class="col-span-1">
        <lab-leaderboard></lab-leaderboard>
      </div>

      <div class="col-span-2">
        <monthly-cases class="mx-auto"></monthly-cases>
      </div>
    </div>
  </div>
</template>
