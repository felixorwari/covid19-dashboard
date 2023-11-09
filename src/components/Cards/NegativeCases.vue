<script>
import MinusCircleIcon from '../Icons/MinusCircleIcon.vue';

export default {
  components: {
    MinusCircleIcon
  }
}
</script>

<template>
    <div class="bg-white rounded-lg shadow">
        <div class="flex px-6 py-7">
          <div class="flex items-center px-5 py-3 mr-5 text-white bg-[#2c7be5] rounded-md shadow-lg">
            <minus-circle-icon></minus-circle-icon>
          </div>
          <div>
            <h5>Negative Cases</h5>
            <p class="text-4xl font-bold">93,425
              <span class="ml-2 text-sm text-green-600"><i class="fa-solid fa-arrow-up"></i> 7.2%</span>
            </p>
          </div>
        </div>
        <div class="flex justify-between p-4 text-sm uppercase bg-gray-100 rounded-b-lg">
          <p class="font-bold text-gray-400">Males: <span class="font-normal">42,054</span></p>
          <p class="font-bold text-gray-400">Females: <span class="font-normal">51,371</span></p>
        </div>
    </div>
</template>