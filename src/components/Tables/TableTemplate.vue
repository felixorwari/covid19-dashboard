<template>
  <div class="overflow-x-auto relative h-full bg-white rounded-lg shadow dark:bg-gray-700">
    <div class="px-6 py-5 font-semibold dark:text-gray-200">
      <slot name="heading"></slot>
    </div>
    <table class="w-full text-sm text-left">
      <thead class="text-xs text-gray-400 uppercase bg-gray-100 dark:bg-gray-800">
        <tr class="border-t border-b border-gray-200 dark:border-gray-800">
          <slot name="table-headings"></slot>
        </tr>
      </thead>

      <tbody class="dark:text-gray-200">
        <slot name="table-rows"></slot>
      </tbody>
    </table>
  </div>
</template>
