<script setup lang="ts">
import { RouterView } from 'vue-router';
import ChildHeader from './components/ChildHeader.vue';
import ChildFooter from './components/ChildFooter.vue';

</script>

<template>
  <ChildHeader />
   <RouterView />
  <ChildFooter />
</template>

<style scoped>
</style>
