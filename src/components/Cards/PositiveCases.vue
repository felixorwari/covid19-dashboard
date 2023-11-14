<script>
import PlusCircleIcon from '../Icons/PlusCircleIcon.vue'

export default {
  components: {
    PlusCircleIcon
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="flex px-6 py-7">
      <div class="flex items-center px-5 py-3 mr-5 text-white bg-[#D13F4A] rounded-md shadow-lg">
        <plus-circle-icon></plus-circle-icon>
      </div>
      <div>
        <h5>Positive Cases</h5>
        <p class="text-4xl font-bold">
          2,450
          <span class="ml-2 text-sm text-red-600"><i class="fa-solid fa-arrow-up"></i> 5.4%</span>
        </p>
      </div>
    </div>
    <div class="flex justify-between px-6 py-4 text-sm uppercase bg-gray-100 rounded-b-lg">
      <p class="font-medium text-gray-400">
        Males: <span class="font-normal text-gray-700">1,932</span>
      </p>
      <p class="font-medium text-gray-400">
        Females: <span class="font-normal text-gray-700">518</span>
      </p>
    </div>
  </div>
</template>
