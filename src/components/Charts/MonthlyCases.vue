<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { theme } = useTheme()
const chartSeries = ref([])

// Computed chart options that respond to theme changes
const chartOptions = computed(() => {
  const isDark =
    theme.value === 'dark' ||
    (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return {
    chart: {
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    theme: {
      mode: isDark ? 'dark' : 'light'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      colors: isDark ? ['var(--color-gray-700/20)'] : ['var(--color-gray-200/20)']
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
      ],
      labels: {
        style: {
          colors: isDark ? '#9CA3AF' : '#374151'
        }
      },
      axisBorder: {
        color: isDark ? '#374151' : '#E5E7EB'
      },
      axisTicks: {
        color: isDark ? '#374151' : '#E5E7EB'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? '#9CA3AF' : '#374151'
        }
      },
      axisBorder: {
        color: isDark ? '#374151' : '#E5E7EB'
      },
      axisTicks: {
        color: isDark ? '#374151' : '#E5E7EB'
      }
    },
    grid: {
      borderColor: isDark ? 'var(--color-gray-900)' : 'var(--color-gray-300)',
      strokeDashArray: 4
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
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 320
          }
        }
      },
      {
        breakpoint: 800,
        options: {
          chart: {
            width: 640
          }
        }
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: 800
          }
        }
      }
    ]
  }
})

// Fetch chart data
const fetchChartData = async () => {
  try {
    const response = await fetch('/data/monthly-covid-cases.json')
    const data = await response.json()
    processChartData(data)
  } catch (error) {
    console.error('Error fetching monthly covid cases data:', error)
  }
}

// Hydrate chart series data
const processChartData = (data) => {
  const positiveData = Object.values(data).map((entry) => entry.positive)
  const negativeData = Object.values(data).map((entry) => entry.negative)

  chartSeries.value = [
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

onMounted(() => {
  fetchChartData()
})
</script>

<template>
  <div class="bg-white rounded-lg shadow dark:bg-gray-700">
    <div class="px-6 py-5 border-b border-gray-200 dark:border-b-gray-800">
      <h4 class="font-semibold dark:text-gray-200">Covid-19 Monthly Cases</h4>
    </div>
    <apexchart
      :width="800"
      :height="385"
      type="bar"
      :options="chartOptions"
      :series="chartSeries"
      class="flex justify-center mx-auto"
    ></apexchart>
  </div>
</template>
