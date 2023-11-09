<script>
export default {
    data() {
        return {
            testingData: {}, // Object to store fetched data
            loading: true // loading flag
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
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then((data) => {
                this.testingData = data;
                this.loading = false; // Set loading to false once data is fetched
            })
                .catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
    }
}
</script>

<template>
    <div v-if="loading" class="mx-auto animate-pulse">Loading...</div>
    <div v-else class="grid grid-cols-3 divide-x divide-y">
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Total Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">{{ (testingData.totalTested.travel + testingData.totalTested.screening).toLocaleString() }}</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Travel <span class="ml-2 text-gray-700">{{ (testingData.totalTested.travel).toLocaleString() }}</span></p>
                <p class="text-gray-400 uppercase">Screening <span class="ml-2 text-gray-700">{{ (testingData.totalTested.screening).toLocaleString() }}</span></p>
            </div>
        </div>
        
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Citizens Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">{{ (testingData.citizensTested.positive + testingData.citizensTested.negative).toLocaleString() }}</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Positive <span class="ml-2 text-gray-700">{{ (testingData.citizensTested.positive).toLocaleString() }}</span></p>
                <p class="text-gray-400 uppercase">Negative <span class="ml-2 text-gray-700">{{ (testingData.citizensTested.negative).toLocaleString() }}</span></p>
            </div>
        </div>
        
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Foreigners Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">{{ (testingData.foreignersTested.positive + testingData.foreignersTested.negative).toLocaleString() }}</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Positive <span class="ml-2 text-gray-700">{{ (testingData.foreignersTested.positive).toLocaleString() }}</span></p>
                <p class="text-gray-400 uppercase">Negative <span class="ml-2 text-gray-700">{{ (testingData.foreignersTested.negative).toLocaleString() }}</span></p>
            </div>
        </div>
    </div>
</template>