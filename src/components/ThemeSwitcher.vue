<template>
  <div class="flex gap-2">
    <button
      v-for="option in options"
      :title="option.value"
      :key="option.value"
      @click="setTheme(option.value)"
      :class="[
        'flex items-center gap-1 px-3 py-1 rounded focus:outline-none border transition hover:cursor-pointer',
        theme === option.value
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600'
      ]"
    >
      <span v-if="option.value === 'light'" aria-label="Light">
        <!-- Sun Icon -->
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41"
          />
        </svg>
      </span>
      <span v-else-if="option.value === 'dark'" aria-label="Dark">
        <!-- Moon Icon -->
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      </span>
      <span v-else aria-label="System">
        <!-- Desktop/Monitor Icon -->
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      </span>
      <span class="sr-only">{{ option.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'
import { computed } from 'vue'

const { theme, setTheme } = useTheme()
const options = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' }
]
</script>
