import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
  }),
  getters: {
    currentTheme: (state) => (state.isDark ? 'dark' : 'light'),
  },
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
});
