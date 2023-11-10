<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          colors: ['#fff']
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        colors: ['#D13F4A', '#92AAEC'],
        legend: {
          show: false
        },
        plotOptions: {
          bar: {
            borderRadius: 9,
            borderRadiusApplication: 'end',
            columnWidth: '65%'
          }
        }
      },
      chartSeries: []
    }
  },
  async mounted() {
    // Fetch chart data
    try {
      const response = await fetch('/data/monthly-covid-cases.json')
      const data = await response.json()
      this.processChartData(data)
    } catch (error) {
      console.error('Error fetching monthly covid cases data:', error)
    }
  },
  methods: {
    // Hydrate chart series data
    processChartData(data) {
      const positiveData = Object.values(data).map((entry) => entry.positive)
      const negativeData = Object.values(data).map((entry) => entry.negative)

      this.chartSeries = [
        {
          name: 'Positive',
          data: positiveData
        },
        {
          name: 'Negative',
          data: negativeData
        }
      ]
    }
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-6 py-5 border-b">
      <h4 class="font-semibold">Covid-19 Monthly Cases</h4>
    </div>
    <apexchart
      :width="820"
      :height="385"
      type="bar"
      :options="chartOptions"
      :series="chartSeries"
      class="flex justify-center mx-auto"
    ></apexchart>
  </div>
</template>
