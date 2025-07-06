<script>
export default {
  name: 'FilterButtons',
  data() {
    return {
      filterOptions: [
        { label: 'Today', selected: false },
        { label: 'This Week', selected: false },
        { label: 'This Month', selected: true },
        { label: 'This Year', selected: false }
      ]
    }
  },
  methods: {
    selectFilter(index) {
      this.filterOptions.forEach((option, i) => {
        option.selected = i === index
      })
    }
  }
}
</script>

<template>
  <!-- Filter Buttons -->
  <div class="inline-flex w-full text-xs rounded-md lg:w-auto" role="group">
    <button
      v-for="(option, index) in filterOptions"
      :key="option.label"
      type="button"
      :aria-selected="option.selected ? 'true' : undefined"
      :class="[
        'grow px-4 py-2 font-medium border text-slate-500 dark:text-slate-600 hover:text-slate-600 focus:text-slate-600 border-slate-400/20 hover:bg-slate-300 hover:shadow-lg dark:hover:shadow-slate-950 dark:border-slate-600/20 dark:hover:bg-slate-300 dark:hover:text-slate-700 hover:cursor-pointer',
        index === 0 ? 'rounded-l-lg' : '',
        index === filterOptions.length - 1 ? 'rounded-r-lg' : '',
        option.selected
          ? 'aria-selected:bg-slate-600 aria-selected:text-slate-200 dark:aria-selected:text-slate-200'
          : ''
      ]"
      @click="selectFilter(index)"
    >
      {{ option.label }}
    </button>
  </div>
  <!-- /End Filter Buttons -->
</template>
