<template>
    <div class="input-wrapper">
        <h2>Текстовый ввод Options API</h2>
        <input v-model="text">
        <div class="text-pole">{{ text }}</div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputOptions',
    data() {
        return {
            text: 'Отредактируйте меня',            
        }
    },
}
);

</script>

<style scoped>

.input-wrapper {
    font-size: 32px;
    color: rgb(9, 8, 87);
}

input {
    width: 400px;
    font-size: 24px;
    color: rgb(13, 1, 24);
}

</style>