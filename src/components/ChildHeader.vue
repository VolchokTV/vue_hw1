<template>
  <header>
    <h1> Приложение В.А.В. </h1>
    <button @click="emitToggleTheme">{{ themeName }}</button>
  </header>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
     themeName: {
       type: String,
       default: 'dark', // Задаем дефолтное значение
       required: false,
     }
   });

   const emit = defineEmits(['toggle-theme']);

   const emitToggleTheme = () =>{
       emit('toggle-theme');
   };
</script>

<style>
header{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}</style>
