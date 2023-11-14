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
          text: 'Covid-19 Positive Case by Counties'
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
  <highcharts :constructor-type="'mapChart'" :options="mapOptions"></highcharts>
</template>
