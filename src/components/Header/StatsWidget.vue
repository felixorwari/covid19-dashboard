<script>
export default {
  data() {
    return {
      testingData: {}, // Object to store fetched data
      loading: true, // loading flag
      statsWidgets: [
        {
          title: 'Total Tested',
          total: (data) =>
            data.totalTested ? data.totalTested.travel + data.totalTested.screening : 0,
          items: [
            { label: 'Travel', value: (data) => data.totalTested?.travel },
            { label: 'Screening', value: (data) => data.totalTested?.screening }
          ]
        },
        {
          title: 'Citizens Tested',
          total: (data) =>
            data.citizensTested ? data.citizensTested.positive + data.citizensTested.negative : 0,
          items: [
            {
              label: 'Positive',
              value: (data) => data.citizensTested?.positive,
              labelClass: 'pl-1 pr-2 text-red-700 bg-red-200 rounded-full dark:bg-red-100'
            },
            {
              label: 'Negative',
              value: (data) => data.citizensTested?.negative,
              labelClass: 'pl-1 pr-2 text-lime-700 bg-lime-200 rounded-full dark:bg-lime-100'
            }
          ]
        },
        {
          title: 'Foreigners Tested',
          total: (data) =>
            data.foreignersTested
              ? data.foreignersTested.positive + data.foreignersTested.negative
              : 0,
          items: [
            {
              label: 'Positive',
              value: (data) => data.foreignersTested?.positive,
              labelClass: 'pl-1 pr-2 text-red-700 bg-red-200 rounded-full dark:bg-red-100'
            },
            {
              label: 'Negative',
              value: (data) => data.foreignersTested?.negative,
              labelClass: 'pl-1 pr-2 text-lime-700 bg-lime-200 rounded-full dark:bg-lime-100'
            }
          ]
        }
      ]
    }
  },

  created() {
    // Fetch data
    this.fetchTestingData()
  },

  methods: {
    async fetchTestingData() {
      fetch('/data/testing-data.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.testingData = data
          this.loading = false // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }
}
</script>

<template>
  <div v-if="loading" class="mx-auto animate-pulse">Loading...</div>
  <div
    v-else
    class="grid grid-cols-1 divide-y divide-gray-200 md:divide-y-0 md:divide-x md:grid-cols-3 dark:divide-gray-600"
  >
    <div v-for="widget in statsWidgets" :key="widget.title" class="flex flex-col px-7 py-5">
      <h4 class="text-sm text-gray-500 dark:text-gray-400">
        {{ widget.title }}
      </h4>
      <div class="flex gap-7 justify-between mb-2">
        <p class="text-3xl font-bold dark:text-gray-200">
          {{ widget.total(testingData).toLocaleString() }}
        </p>
        <div class="flex justify-end items-center">
          <img
            src="../../assets/line-chart.svg"
            class="object-contain w-40 h-auto md:w-32"
            alt="line chart"
          />
        </div>
      </div>
      <div class="flex justify-between text-xs font-medium">
        <p
          v-for="item in widget.items"
          :key="item.label"
          class="text-gray-400 uppercase dark:text-gray-500"
        >
          <span v-if="item.labelClass" :class="item.labelClass" class="text-xxs">
            <span class="inline-block mr-1 w-2 h-2 rounded-full border-2 border-inherit"></span
            >{{ item.label }}</span
          >
          <template v-else class>{{ item.label }}</template>
          <span class="ml-2 text-gray-700 dark:text-gray-400">
            {{ item.value(testingData)?.toLocaleString() }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
