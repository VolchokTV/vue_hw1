<template>
        <div class="counter-wrapper">
        Counter: {{ count }}
    </div>
    <button v-on:click="count++">++</button>
    <br><br>
    <button @click="decrementCount">---</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0);

const decrementCount = () => {
    count.value--;

};
//console.log(count.value);
</script>

<style scoped>
.counter-wrapper {

    font-size: 32px;
    color: gold;
}

button {
    width: 300px;
    font-size: 24px;
    color: blueviolet;
    background-color: aqua;
    border: none;
    padding: 10px 25px;
}
</style>