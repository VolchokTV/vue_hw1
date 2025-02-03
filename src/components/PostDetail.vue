<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <button @click="confirmLeave">Назад</button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const post = ref({});
    const route = useRoute();
    const router = useRouter();

    const fetchPost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
      post.value = response.data;
    };

    onMounted(fetchPost);

    const confirmLeave = () => {
      const confirmLeave = window.confirm('Вы уверены, что хотите уйти?');
      if (confirmLeave) {
        router.push('/');
      }
    };

    // Удаляем обработчик перед уходом со страницы
    onBeforeUnmount(() => {
      window.removeEventListener('beforeunload', confirmLeave);
    });

    return {
      post,
      confirmLeave,
    };
  },
};
</script>
