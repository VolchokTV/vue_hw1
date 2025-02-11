<template>
  <footer>
    <p>© 2024 В.А.В. Мое Приложение</p>
    <p>Текущая тема: {{ currentTheme }}</p>
 </footer>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.currentTheme);
const toggleTheme = () => themeStore.toggleTheme();
</script>

<style>
footer {
  padding: 20px;
  text-align: center;
}
</style>
