<script>
export default {
    data() {
        return {
            options: {
                chart: {
                    height: 'auto',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 2,
                    colors: ["#fff"]
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                },
                colors: ["#D13F4A", "#D2DDEC"],
                legend: {
                    show: false
                },
                plotOptions: {
                    bar: {
                        borderRadius: 8,
                        borderRadiusApplication: 'around',
                        columnWidth: '65%'
                    }
                },
            },
            series: [
                {
                    name: 'positive',
                    data: [
                        520, 256, 750, 400, 100, 220, 150, 614, 648, 523, 269, 840
                    ]
                },
                {
                    name: 'negative',
                    data: [
                        1161, 650, 1920, 700, 379, 384, 432, 1432, 1749, 1100, 600, 2200
                    ]
                },
            ],
        }
    }
}
</script>

<template>
    <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-5 border-b">
            <h4 class="font-semibold">Covid-19 Cases</h4>
        </div>
        <apexchart :width="620" :height="height" type="bar" :options="options" :series="series" class="flex justify-center mx-auto"></apexchart>
    </div>
</template>