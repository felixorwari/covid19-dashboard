import { ref, watch, onMounted, onUnmounted } from 'vue';

export function useTheme() {
  const theme = ref(localStorage.getItem('theme') || 'system');

  function applyTheme(value) {
    const root = document.documentElement;
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (value === 'dark' || (value === 'system' && isSystemDark)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  function setTheme(value) {
    theme.value = value;
    localStorage.setItem('theme', value);
    applyTheme(value);
  }

  function handleSystemChange(e) {
    if (theme.value === 'system') {
      applyTheme('system');
    }
  }

  onMounted(() => {
    applyTheme(theme.value);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemChange);
  });

  onUnmounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemChange);
  });

  watch(theme, (value) => {
    setTheme(value);
  });

  return { theme, setTheme };
} 