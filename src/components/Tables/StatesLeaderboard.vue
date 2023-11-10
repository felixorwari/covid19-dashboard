<script>
import TableTemplate from './TableTemplate.vue'

export default {
  components: {
    TableTemplate
  },
  data() {
    return {
      statesData: {}, // Object to store fetched data
      loading: true // loading flag
    }
  },
  created() {
    this.fetchStatesData()
  },
  methods: {
    async fetchStatesData() {
      fetch('/data/states-leaderboard.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.')
          }
          return response.json()
        })
        .then((data) => {
          this.statesData = data
          this.loading = false
        })
        .catch((error) => {
          console.error('Error fetching data: ', error)
        })
    }
  }
}
</script>

<template>
  <table-template>
    <template #heading>
      <h4 class="font-semibold">States Leader Board</h4>
    </template>

    <template #table-headings>
      <th scope="col" class="py-3 pl-6 pr-2 font-normal">County</th>
      <th scope="col" class="px-2 py-3 font-normal text-right">Positive Cases</th>
      <th scope="col" class="py-3 pl-2 pr-6 font-normal text-right">Negative Cases</th>
    </template>

    <template #table-rows>
      <tr v-for="item in statesData" :key="item.name" class="border-b hover:bg-gray-50">
        <td class="py-3 pl-6 pr-2">{{ item.name }}</td>
        <td class="px-2 py-3 text-right">{{ item.positive.toLocaleString() }}</td>
        <td class="py-3 pl-2 pr-6 text-right">{{ item.negative.toLocaleString() }}</td>
      </tr>
    </template>
  </table-template>
</template>
