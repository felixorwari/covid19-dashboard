<script>
import kenyaMap from './map'

export default {
  data() {
    return {
      mapOptions: {
        chart: {
          map: kenyaMap,
          height: '80%'
        },
        title: {
          text: ''
        },
        accessibility: {
          series: {
            descriptionFormat: '{series.name} in Kenya by county'
          },
          point: {
            valueDescriptionFormat: '{point.hc-key}.'
          }
        },
        legend: {
          enabled: true
        },
        colorAxis: {
          min: 10,
          max: 25000,
          type: 'logarithmic',
          stops: [
            [0, '#E9C9D2'],
            [1, '#AE141F']
          ]
        },
        series: [
          {
            data: [],
            name: 'Covid-19 Positive Cases',
            states: {
              hover: {
                color: '#FF001326',
                borderColor: '#D13F4A'
              }
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              valueSuffix: ' cases',
              pointFormat: '<b>{point.hc-key} County</b>: {point.value}'
            }
          }
        ]
      }
    }
  },
  async mounted() {
    try {
      // fetch and hydrate series data
      this.fetchSeriesData()
    } catch (error) {
      console.error('Error populating covid 19 positive cases data:', error)
    }
  },
  methods: {
    fetchSeriesData() {
      // Fetch data from the states JSON file
      fetch('/data/states-leaderboard.json')
        .then((response) => response.json())
        .then((data) => {
          // Assign the fetched data to the map series data property
          this.transformSeriesData(data)
        })
        .catch((error) => {
          console.error('Error fetching map series data:', error)
        })
    },
    transformSeriesData(originalData) {
      // Iterate over the keys of the original data
      Object.keys(originalData).forEach((key) => {
        const locationData = originalData[key]

        const transformedData = [locationData.name, locationData.positive]

        // Push the new object into the map series data array
        this.mapOptions.series[0].data.push(transformedData)
      })
    }
  }
}
</script>

<template>
  <div class="w-full min-h-full bg-white rounded-lg shadow dark:bg-gray-700">
    <div class="px-6 py-5 border-b border-gray-200 dark:border-b-gray-800">
      <h4 class="font-semibold dark:text-gray-200">Covid-19 Positive Cases by County</h4>
    </div>

    <highcharts
      :constructor-type="'mapChart'"
      :options="mapOptions"
      class="w-auto h-full"
    ></highcharts>
  </div>
</template>

<style>
.highcharts-container {
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
}
</style>
