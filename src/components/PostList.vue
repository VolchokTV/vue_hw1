<!-- <template>
  <div>
    <h1>Посты</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    });

    return {
      posts,
    };
  },
};
</script> -->

<template>
  <div>
    <h1>Посты</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const posts = ref<Post[]>([]); // Определяем массив постов

onMounted(async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  posts.value = response.data;
});
</script>

