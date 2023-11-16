<template>
  <!-- Filter Buttons -->
  <div class="inline-flex text-xs rounded-md" role="group">
    <button type="button"
      class="px-4 py-2 font-medium border rounded-l-lg text-slate-400 hover:text-slate-600 focus:text-slate-600 aria-selected:text-slate-800 border-slate-400/20 hover:bg-slate-300 hover:shadow-lg">
      Today
    </button>
    <button type="button" aria-selected="true"
      class="px-4 py-2 font-medium border text-slate-400 hover:text-slate-600 focus:text-slate-600 aria-selected:text-slate-800 border-slate-400/20 hover:bg-slate-300 hover:shadow-lg aria-selected:bg-slate-300">
      This Week
    </button>
    <button type="button"
      class="px-4 py-2 font-medium border text-slate-400 hover:text-slate-600 focus:text-slate-600 aria-selected:text-slate-800 border-slate-400/20 hover:bg-slate-300 hover:shadow-lg">
      This Month
    </button>
    <button type="button"
      class="px-4 py-2 font-medium border rounded-r-lg text-slate-400 hover:text-slate-600 focus:text-slate-600 aria-selected:text-slate-800 border-slate-400/20 hover:bg-slate-300 hover:shadow-lg">
      This Year
    </button>
  </div>
  <!-- /End Filter Buttons -->
</template>
