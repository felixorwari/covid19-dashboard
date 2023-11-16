<script>
import kenyaMapData from '../../map'

export default {
  data() {
    return {
      mapOptions: {
        chart: {
          map: kenyaMapData
        },
        title: {
          text: ''
        },
        series: [
          {
            data: [],
            name: 'Covid-19 Positive Cases',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        ]
      }
    }
  }
}
</script>

<template>
  <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="w-auto h-full rounded-b-lg"></highcharts>
</template>

<style>
.highcharts-container {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>