<template>
  <section class="mainSection">
    <main>
      <h2>Главная секция</h2>
      <h2>Посты</h2>
      <ul>
        <li v-for="post in visiblePosts" :key="post.id" class="post">
          <h5>{{ post.title }}</h5>
          <p>{{ post.content }}</p>
        </li>
      </ul>
      <button @click="toggleVisibility">
        {{ toggleButtonText }}
      </button>
    </main>
  </section>
</template>


<script setup lang="ts">
import type { IPost } from '@/data/posts';
import {  computed, defineProps, defineEmits } from 'vue';


const props = defineProps({
  posts: { type: Array<IPost>, required: true },
  showAll: { type: Boolean, required: true },
});

const emit = defineEmits(['toggleList']);
const toggleButtonText = computed(() => {
  return props.showAll ? 'Показать первые 10' : 'Показать все';
});

//const showAll = ref(true); // Исходное состояние - сначала 10 постов

// Возвращаем 10 или все посты
const visiblePosts = computed (() => {
    return props.showAll ? props.posts : props.posts.slice(0, 10);
  });
const toggleVisibility = () => {
  //showAll.value = !showAll.value; // Переключаем состояние видимости постов
  emit('toggleList'); // Эмитируем событие для родительского компонента
};

</script>

<style scoped>
.mainSection {
  color: green;
  font-size: 48px;
}

main {
  padding: 20px;
}

.post {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

ul {
  list-style-type: none;
}

button {
  margin-top: 10px;
  padding: 20px;
}

h5 {
  font-size: 20px;
}

p {
  font-size: 15px;
}
</style>
