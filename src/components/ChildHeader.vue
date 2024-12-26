<template>
  <header>
    <h1> Приложение В.А.В. </h1>
    <button @click="toggleTheme">{{ themeName }}</button>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  props: {
    themeName: {
      type: String,
      default: 'dark', // Задаем дефолтное значение
      required: false
    }
  },

  methods: {
    toggleTheme() {
      this.$emit('theme-toggled');
    }
  }
});



</script>

<style>
header{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}</style>
