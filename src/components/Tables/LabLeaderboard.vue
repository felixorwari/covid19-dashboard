<script>
import TableTemplate from './TableTemplate.vue';

export default {
    components: {
        TableTemplate
    },
    data() {
        return {
            labData: {}, // Object to store fetched data
            loading: true // loading flag
        }
    },
    created() {
        this.fetchStatesData();
    },
    methods: {
        async fetchStatesData() {
            fetch('/data/laboratories-leaderboard.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then((data) => {
                this.labData = data;
                this.loading = false;
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            })
        }
    }
}
</script>

<template>
    <table-template>
        <template #heading>
            <h4 class="font-semibold">Laboratories Leader Board</h4>
        </template>

        <template #table-headings>
            <th scope="col" class="py-3 pl-6 pr-2 font-normal">Laboratory</th>
            <th scope="col" class="py-3 pl-2 pr-6 font-normal text-right">Total Tests</th>
        </template>
        
        <template #table-rows>
            <tr v-for="item in labData" :key="item.name" class="border-b">
                <td class="py-3 pl-6 pr-2">{{ item.name }}</td>
                <td class="py-3 pl-2 pr-6 text-right">{{ (item.tests).toLocaleString() }}</td>
            </tr>
        </template>        
    </table-template>
</template>