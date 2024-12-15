<template>
    <div class="counter-wrapper">
        Counter Opt Api: {{ count }}
    </div>

    <button class="button" @click="count++"> +++ </button>
    <br>
    <br>
    <button class="button" @click="decrCount"> --- </button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CounterOptionsApi',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        decrCount() {
            this.count--;
        }
    }
})
</script>



<style scoped>
.counter-wrapper {
    font-size: 32px;
    color: rgb(9, 8, 87);
}

.button {
    width: 300px;
    font-size: 24px;
    color: rgb(226, 119, 43);
    background-color: rgb(114, 139, 208);
    border: none;
    padding: 10px 25px;
}
</style>