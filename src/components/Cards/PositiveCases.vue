<script>
import PlusCircleIcon from '../Icons/PlusCircleIcon.vue'

export default {
  components: {
    PlusCircleIcon
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow dark:bg-gray-700">
    <div class="flex px-6 py-7">
      <div class="flex items-center px-4 py-3 mr-5 text-white bg-[#D13F4A] rounded-md shadow-lg">
        <plus-circle-icon></plus-circle-icon>
      </div>
      <div>
        <h5 class="text-gray-500 dark:text-gray-400">Positive Cases</h5>
        <p class="text-2xl font-bold dark:text-gray-200">
          2,450
          <span class="ml-2 text-sm text-red-600 dark:font-normal dark:text-red-400"
            ><i class="fa-solid fa-arrow-up"></i> 5.4%</span
          >
        </p>
      </div>
    </div>
    <div
      class="flex justify-between px-6 py-4 text-sm uppercase bg-gray-100 rounded-b-lg dark:bg-gray-800"
    >
      <p class="font-medium text-gray-400 dark:text-gray-500">
        Males: <span class="font-normal text-gray-700 dark:text-gray-400">1,932</span>
      </p>
      <p class="font-medium text-gray-400 dark:text-gray-500">
        Females: <span class="font-normal text-gray-700 dark:text-gray-400">518</span>
      </p>
    </div>
  </div>
</template>
