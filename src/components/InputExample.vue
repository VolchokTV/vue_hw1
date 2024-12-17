<template>
    <div>
        <h2>Текстовый ввод Comosition API</h2>
        <input v-model="text">
        <div class="text-pole">{{ text }}</div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('Отредактируйте меня');
</script>

<style scoped>
.text-pole {
    font-size: 32px;
    color: gold;
}

input {
    width: 400px;
    font-size: 24px;
    color: blueviolet;
}
</style>