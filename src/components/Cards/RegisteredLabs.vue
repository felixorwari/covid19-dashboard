<script>
import UsersGroupIcon from '../Icons/UsersGroupIcon.vue'

export default {
  components: {
    UsersGroupIcon
  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="flex px-6 py-7">
      <div class="flex items-center px-5 py-3 mr-5 text-white bg-[#2c7be5] rounded-md shadow-lg">
        <users-group-icon></users-group-icon>
      </div>
      <div>
        <h5 class="text-gray-500">Registered Labs</h5>
        <p class="text-2xl font-bold">
          20
          <span class="ml-2 text-sm text-green-600"><i class="fa-solid fa-arrow-up"></i> 2</span>
        </p>
      </div>
    </div>
    <div class="px-6 py-4 text-sm bg-gray-100 rounded-b-lg">
      <p>&nbsp;</p>
    </div>
  </div>
</template>
