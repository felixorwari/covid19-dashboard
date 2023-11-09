<template>
    <div class="grid grid-cols-3 divide-x">
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Total Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">171,897</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Travel <span class="ml-2 text-gray-700">123,932</span></p>
                <p class="text-gray-400 uppercase">Screening <span class="ml-2 text-gray-700">47,965</span></p>
            </div>
        </div>
        
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Citizens Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">21,800</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Positive <span class="ml-2 text-gray-700">123,932</span></p>
                <p class="text-gray-400 uppercase">Negative <span class="ml-2 text-gray-700">47,965</span></p>
            </div>
        </div>
        
        <div class="flex flex-col px-7 pt-5 pb-2.5">
            <h4 class="text-sm font-medium text-gray-400">Foreigners Tested</h4>
            
            <div class="flex justify-between mb-2 gap-7">
                <p class="text-3xl font-bold">150,097</p>
                <div class="chart"></div>
            </div>

            <div class="flex justify-between text-xs font-medium">
                <p class="text-gray-400 uppercase">Positive <span class="ml-2 text-gray-700">123,932</span></p>
                <p class="text-gray-400 uppercase">Negative <span class="ml-2 text-gray-700">47,965</span></p>
            </div>
        </div>
    </div>
</template>