<template>
  <header>
    <h3> Приложение В.А.В. ДЗ-5 </h3>

  </header>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.currentTheme);
const toggleTheme = () => themeStore.toggleTheme();
</script>

<style>
header {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
