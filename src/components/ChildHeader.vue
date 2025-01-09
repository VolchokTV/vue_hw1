<template>
  <header>
    <h1> Приложение В.А.В. </h1>
    <button @click="emitToggleTheme">{{ themeName }}</button>
  </header>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['toggle-theme']);

const emitToggleTheme = () => {
  emit('toggle-theme');
};
const props = defineProps({
  themeName: { type: String,
      defult: 'dark',
       required: true },
});
//const themeName = ref('dark');
console.log (props.themeName);
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>
