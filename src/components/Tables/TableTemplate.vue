<template>
  <div class="relative overflow-x-auto bg-white rounded-lg shadow">
    <div class="px-6 py-5">
      <slot name="heading"></slot>
    </div>
    <table class="w-full text-sm text-left">
      <thead class="text-xs text-gray-400 uppercase bg-gray-100">
        <tr class="border-t border-b border-gray-200">
          <slot name="table-headings"></slot>
        </tr>
      </thead>

      <tbody>
        <slot name="table-rows"></slot>
      </tbody>
    </table>
  </div>
</template>
