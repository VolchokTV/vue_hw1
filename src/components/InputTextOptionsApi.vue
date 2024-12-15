<template>
    <div class="input-wrapper">
        <h1>Текстовый ввод Options API</h1>
        <input v-model="text">
        <div class="text-pole">{{ text }}</div>
    </div>
</template>

<script lang ="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputTextOptionsApi',
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

</style>