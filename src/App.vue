<script setup lang="ts">
import { RouterView } from 'vue-router';
import ChildHeader from './components/ChildHeader.vue';
import ChildFooter from './components/ChildFooter.vue';
import { useThemeStore } from '@/stores/themeStore';
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.currentTheme);
const toggleTheme = () => themeStore.toggleTheme();
</script>

<template>
   <div :class="currentTheme">
    <button @click="toggleTheme">
      Переключить тему на {{ currentTheme === 'dark' ? 'светлую' : 'темную' }}
    </button>
  <ChildHeader />
  <RouterView />
  <ChildFooter />
</div>
</template>

<style scoped>

.dark {
  background-color: #333;
  color: #fff;
}
.light {
  background-color: #fff;
  color: #000;
}
</style>
